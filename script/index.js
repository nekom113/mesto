import { initialCards, profileSubtitle, inputName, inputDescription, profileForm, buttonEditProfile, profileName, inputPlaceImgLink, inputPlaceCall, buttonAddCard, cardForm, cards, popupList, popupAddCardPlace, profilePopup, validationConfig, buttonsClosePopup } from './constants.js'
import { openPopup, closePopup } from './utils.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const validatorProfileForm = new FormValidator(validationConfig, profileForm);
validatorProfileForm.enableValidation()
const validatorCardForm = new FormValidator(validationConfig, cardForm);
validatorCardForm.enableValidation()

const createNewCard = ({ link, name }, idElement) => {
  return new Card(link, name, idElement)
}

function renderCards(arrDB) {
  arrDB.forEach(element => {
    cards.append(createNewCard(element, "#template").createCard())
  });
}
renderCards(initialCards)

//================ add card ===================

function addNewCard() {
  const valueCard = {
    link: inputPlaceImgLink.value,
    name: inputPlaceCall.value
  }
  return cards.prepend(createNewCard(valueCard, "#template").createCard())
};

cardForm.addEventListener('submit', ev => {
  ev.preventDefault()
  addNewCard()
  ev.target.reset()
  closePopup(popupAddCardPlace)
})
// ========================edit profile ================================

function fillProfileInputs() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileSubtitle.textContent;
};

function editProfile() {
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
};

// ============== event listeners ==========================

buttonEditProfile.addEventListener('click', () => {
  openPopup(profilePopup);
  fillProfileInputs();
});

profileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  editProfile();
  closePopup(profilePopup);
});

buttonAddCard.addEventListener('click', ev => openPopup(popupAddCardPlace))

popupList.forEach(popupElement => popupElement.addEventListener('mousedown', evt => {
  if (Array.from(evt.target.classList).includes('popup_opened')) {
    closePopup(document.querySelector('.popup_opened'))
  }
}))
buttonsClosePopup.forEach(btn => {
  btn.addEventListener('click', () => closePopup(document.querySelector('.popup_opened')))
})



