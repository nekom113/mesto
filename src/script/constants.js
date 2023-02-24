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

// export const profileSubtitle = document.querySelector('.profile__subtitle');
// export const buttonsClosePopup = document.querySelectorAll('.popup__close-icon')
// export const profileName = document.querySelector('.profile__title');
// export const inputPlaceImgLink = document.querySelector('#image-link')
// export const inputPlaceCall = document.querySelector('#place-call')
// export const popupPicture = document.querySelector('#popup-picture-card')
// export const popupPictureImage = popupPicture.querySelector('.popup__image')
// export const popupPictureName = popupPicture.querySelector('.popup__title_type_picture')
// export const popupList = document.querySelectorAll('.popup')

export const validationConfig = {
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active',
  inactiveButtonClass: 'popup__save-button_inactive',
  activeButtonClass: '.popup__save-button',
  inputSelector: '.popup__input',
  formSelector: '.popup__form'
}
