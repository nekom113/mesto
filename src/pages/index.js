import './index.css'
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import { inputName, inputDescription, profileForm, buttonEditProfile, buttonAddCard, cardForm, validationConfig } from '../script/constants.js'
import { apiSettings } from '../script/apiSettings';
import Api from '../components/Api';
// ===== User Profile =====

const api = new Api({baseUrl: apiSettings.baseUrl, headers: apiSettings.headers})
const userProfile = new UserInfo({ nameSelector: '.profile__title', aboutSelector: '.profile__subtitle', avatarSelector: '.profile__avatar' })
const popupEditor = new PopupWithForm('#popup-edit-profile',
  (userData) => {
    userProfile.setUserInfo(userData);
    popupEditor.close()
  })
popupEditor.setEventListeners()

// ===============create card==============

const createCard = (cardData) => {
  const card = new Card({
    cardData,
    handleCardClick: () => {
      imagePopupItem.open(cardData.name, cardData.link);
    }
  },
    '#template')
  return card.createCard();
}

const renderSection = new Section((el) => renderSection.addItem(createCard(el)), '.cards')

//================ add card ===================

const newPopupCard = new PopupWithForm('#popup-add-card',
  (cardData) => {
    renderSection.addItem(createCard(cardData))
    newPopupCard.close();
  })

newPopupCard.setEventListeners();

const imagePopupItem = new PopupWithImage('#popup-picture-card')
imagePopupItem.setEventListeners()

// ======= validation ==========
const validatorProfileForm = new FormValidator(validationConfig, profileForm);
validatorProfileForm.enableValidation()
const validatorCardForm = new FormValidator(validationConfig, cardForm);
validatorCardForm.enableValidation()

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
  validatorCardForm.resetValidation()
})

Promise.all([api.getProfileData(), api.getCardsData()])
.then(([profileData, cardsData]) => {
  userProfile.setUserInfo(profileData),
  renderSection.renderCards(cardsData)

})
.catch((error)=> console.error('Look at this Error ===>', error))
