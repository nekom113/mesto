import './index.css'
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import { inputName, inputDescription, profileForm, buttonEditProfile, buttonAddCard, cardForm, validationConfig, buttonProfileAvatar, avatarForm } from '../script/constants.js'
import { apiSettings } from '../script/apiSettings';
import Api from '../components/Api';
import PopupWithConfirm from '../components/PopupWithConfirm';
import { showLoader } from '../script/utils';
// ===== User Profile =====

const api = new Api(apiSettings)
const userProfile = new UserInfo({ nameSelector: '.profile__title', aboutSelector: '.profile__subtitle', avatarSelector: '.profile__avatar' })
const popupEditor = new PopupWithForm('#popup-edit-profile',
  (userData) => {
    showLoader('#popup-edit-profile', 'Сохранение...')
    api.setProfileInfo(userData)
    .then((data) =>{
      userProfile.setUserInfo(data)
      popupEditor.close()
    })
    .catch((err)=> console.error('Ошибка!', err))
    .finally(()=>showLoader('#popup-edit-profile', 'Сохранить'))
  })
popupEditor.setEventListeners()
const newAvatar = new PopupWithForm('#popup-update-avatar',
  (cardData) => {
    showLoader('#popup-update-avatar', 'Сохранение...')
    api.setProfileAvatar(cardData)
    .then((data)=>{
      userProfile.setUserInfo(data)
      newAvatar.close();
    })
    .catch((err)=> console.error('Ошибка!', err))
    .finally(()=>showLoader('#popup-update-avatar', 'Сохранить'))
  })
  newAvatar.setEventListeners()

// ===============create card==============

const createCard = (cardData) => {
  const card = new Card({
    cardData,
    handleCardClick: () => {
      imagePopupItem.open(cardData.name, cardData.link);
    },
    handleConfirmDelete: (card) => {
      confirmDelCard.open(card) 
    },
    handleControlCardLike: (card) =>{
      if(!card.checkLikeState()){ 
        api.addLike(card.getCardId())
        .then((data)=>{
          card.changeLikeState(data)
        })
        .catch((err)=> console.error('Ошибка!', err))

      } else{
        api.deleteLike(cardData._id).then((data)=>{
          card.changeLikeState(data)
        })
        .catch((err)=> console.error('Ошибка!', err))
      }
    }, 
  },
    '#template', userProfile )
  return card.createCard();
}

const renderSection = new Section((el) => renderSection.addItem(createCard(el)), '.cards')

//================ add card ===================

const newPopupCard = new PopupWithForm('#popup-add-card',
  (cardData) => {
    showLoader('#popup-add-card', 'Сохранение...')
    api.addNewCard(cardData)
    .then((data)=>{
      renderSection.addItem(createCard(data))
      newPopupCard.close();
    })
    .catch((err)=> console.error('Ошибка!', err))
    .finally(()=>showLoader('#popup-add-card', 'Сохранить'))
    
  })
  

const confirmDelCard = new PopupWithConfirm('#popup-confirm', (cardTarget)=>{
  showLoader('#popup-confirm', 'Сохранение...')
  api.deleteCard(cardTarget._cardData._id)
  .then(()=>{
    cardTarget.handleDeleteCard()
    confirmDelCard.close()
  })
  .catch((err)=> console.error('Ошибка!', err))
  .finally(()=>showLoader('#popup-confirm', 'Да'))
})
confirmDelCard.setEventListeners()

newPopupCard.setEventListeners();

const imagePopupItem = new PopupWithImage('#popup-picture-card')
imagePopupItem.setEventListeners()

// ======= validation ==========
const validatorProfileForm = new FormValidator(validationConfig, profileForm);
validatorProfileForm.enableValidation()
const validatorCardForm = new FormValidator(validationConfig, cardForm);
validatorCardForm.enableValidation()
const validatorAvatarForm = new FormValidator(validationConfig, avatarForm);
validatorAvatarForm.enableValidation()

// ======= event listeners ================

buttonEditProfile.addEventListener('click', () => {
  const userData = userProfile.getUserInfo();
  inputName.value = userData.userName;
  inputDescription.value = userData.userAbout
  popupEditor.open()
  validatorProfileForm.resetValidation()
})

buttonAddCard.addEventListener('click', () => {
  newPopupCard.open()
  validatorAvatarForm.resetValidation()
})
buttonProfileAvatar.addEventListener('click', () => {
  newAvatar.open()
  validatorCardForm.resetValidation()
})

Promise.all([api.getProfileData(), api.getCardsData()])
.then(([profileData, cardsData]) => {
  userProfile.setUserInfo(profileData),
  renderSection.renderCards(cardsData)
})
.catch((error)=> console.error('Look at this Error ===>', error))
