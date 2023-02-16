import './index.css'
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import { initialCards, inputName, inputDescription, profileForm, buttonEditProfile, buttonAddCard, cardForm, validationConfig } from '../script/constants.js'

// ===== User Profile =====

const userProfile = new UserInfo({ nameSelector: '.profile__title', aboutSelector: '.profile__subtitle' })
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

const renderSection = new Section({
  items: initialCards,
  renderer: (el) => {
    renderSection.addItem(createCard(el))
  }
}, '.cards')
renderSection.renderCards();


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
})

buttonAddCard.addEventListener('click', () => {
  newPopupCard.open()
})

