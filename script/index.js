import { initialCards, profileSubtitle, inputName, inputDescription, saveEditButton, editButton, profileCloseButton, profileName, inputPlaceImgLink, inputPlaceCall, buttonAddCard, popupAddCardCloseBtn, popupAddCardSaveBtn, cards, btnPopupPictureClose, popupList, popupPicture, popupAddCardPlace, profilePopup, validationConfig } from './config.js'
import { openPopup, closePopup } from './utils.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const validatorProfileForm = new FormValidator(validationConfig, saveEditButton)
validatorProfileForm.enableValidation()
const validatorCardForm = new FormValidator(validationConfig, popupAddCardSaveBtn)
validatorCardForm.enableValidation()


function renderCards(arrDB) {
  arrDB.forEach(element => {
    const newCard = new Card (element.link, element.name, "#template"  )
    cards.append(newCard.createCards())
  });
}
renderCards(initialCards)

//================ add card ===================

function addNewCard() {
  const valueCard = {
    link: inputPlaceImgLink.value,
    name: inputPlaceCall.value
  }
  const newCard = new Card (valueCard.link, valueCard.name, "#template"  )
  return cards.prepend(newCard.createCards())
};

popupAddCardSaveBtn.addEventListener('submit', ev => {
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

editButton.addEventListener('click', () => {

  openPopup(profilePopup);
  fillProfileInputs();
});

profileCloseButton.addEventListener('click', () => closePopup(profilePopup));

saveEditButton.addEventListener('submit', (e) => {
  e.preventDefault();
  editProfile();
  closePopup(profilePopup);
});


buttonAddCard.addEventListener('click', ev => openPopup(popupAddCardPlace))
popupAddCardCloseBtn.addEventListener('click', ev => closePopup(popupAddCardPlace))

btnPopupPictureClose.addEventListener('click', (ev) => {
  closePopup(popupPicture)
});

popupList.forEach(popupElement => popupElement.addEventListener('mousedown', evt => {
  if (Array.from(evt.target.classList).includes('popup_opened')) {
    closePopup(document.querySelector('.popup_opened'))
  }
}))


