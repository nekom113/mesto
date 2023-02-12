export const profileSubtitle = document.querySelector('.profile__subtitle');
export const inputName = document.querySelector('#name')
export const inputDescription = document.querySelector('#description')
export const buttonsClosePopup = document.querySelectorAll('.popup__close-icon')
export const profilePopup = document.querySelector('#popup-edit-profile')
export const profileForm = profilePopup.querySelector('.popup__form')
export const buttonEditProfile = document.querySelector('.profile__edit-button')
export const profileName = document.querySelector('.profile__title');
export const inputPlaceImgLink = document.querySelector('#image-link')
export const inputPlaceCall = document.querySelector('#place-call')
export const buttonAddCard = document.querySelector('.profile__add-button')
export const popupAddCardPlace = document.querySelector('#popup-add-card')
export const cardForm = popupAddCardPlace.querySelector('.popup__form')
export const popupPicture = document.querySelector('#popup-picture-card')
export const popupPictureImage = popupPicture.querySelector('.popup__image')
export const popupPictureName = popupPicture.querySelector('.popup__title_type_picture')
export const popupList = document.querySelectorAll('.popup')
export const cards = document.querySelector('.cards')

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationConfig = {
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active',
  inactiveButtonClass: 'popup__save-button_inactive',
  activeButtonClass: '.popup__save-button',
  inputSelector: '.popup__input',
  formSelector: '.popup__form'
}
