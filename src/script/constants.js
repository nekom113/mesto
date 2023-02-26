export const inputName = document.querySelector('#name')
export const inputDescription = document.querySelector('#description')
export const profilePopup = document.querySelector('#popup-edit-profile')
export const profileForm = profilePopup.querySelector('.popup__form')
export const buttonEditProfile = document.querySelector('.profile__edit-button')
export const buttonAddCard = document.querySelector('.profile__add-button')
export const popupAddCardPlace = document.querySelector('#popup-add-card')
export const cardForm = popupAddCardPlace.querySelector('.popup__form')
export const avatarForm = document.querySelector('#popup-update-avatar').querySelector('.popup__form')
export const buttonProfileAvatar = document.querySelector('.profile__avatar')
export const likesCount = document.querySelector('.card__likes-count')

export const validationConfig = {
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active',
  inactiveButtonClass: 'popup__save-button_inactive',
  activeButtonClass: '.popup__save-button',
  inputSelector: '.popup__input',
  formSelector: '.popup__form'
}
