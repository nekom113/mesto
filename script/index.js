const profileSubtitle = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('#name')
const inputDescription = document.querySelector('#description')
const profilePopup = document.querySelector('#popup-edit-profile')
const saveEditButton = profilePopup.querySelector('.popup__form')
const editPopupButton = profilePopup.querySelector('.popup__save-button')
const inputEditProfileList = Array.from(profilePopup.querySelectorAll('.popup__input'))
const editButton = document.querySelector('.profile__edit-button')
const buttonPopupClose = document.querySelector('.popup__close-icon')
const profileName = document.querySelector('.profile__title');
const inputPlaceImgLink = document.querySelector('#image-link')
const inputPlaceCall = document.querySelector('#place-call')
const buttonAddCard = document.querySelector('.profile__add-button')
const popupAddCardPlace = document.querySelector('#popup-add-card')
const popupAddCardCloseBtn = document.querySelector('#popup-close-btn')
const popupAddCardSaveBtn = popupAddCardPlace.querySelector('.popup__form')
const cards = document.querySelector('.cards')
const template = document.querySelector('#template')
const cardPlaceImage = document.querySelector('.card')
const btnPopupPictureClose = document.querySelector('#close-picture-popup')
const popupPicture = document.querySelector('#popup-picture-card')
const popupPictureImage = popupPicture.querySelector('.popup__image')
const popupPictureName = popupPicture.querySelector('.popup__title_type_picture')
const popup = document.querySelectorAll('.popup')


const initialCards = [
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

function openPopup(popupItem) {
  popupItem.classList.add('popup_opened');
};

function closePopup(popupitem) {
  if (popupitem) {
    popupitem.classList.remove('popup_opened');
  }
};

// ========================edit profile ================================


function getProfileDataToForm() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileSubtitle.textContent;
};

function editProfile() {
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
};

editButton.addEventListener('click', () => {

  openPopup(profilePopup);
  getProfileDataToForm();
  toggleButtonState(inputEditProfileList, editPopupButton, validationConfig)
});

buttonPopupClose.addEventListener('click', () => closePopup(profilePopup));

saveEditButton.addEventListener('submit', (e) => {
  e.preventDefault();
  editProfile();
  closePopup(profilePopup);
});
//================ create new cards ===================

function createCards({ link, name }) {
  const newCard = template.content.cloneNode(true)
  const cardImage = newCard.querySelector('.card__img')
  cardImage.src = link;
  cardImage.alt = name;
  newCard.querySelector('.card__title').textContent = name;
  newCard.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  cardImage.addEventListener('click', (e) => showPicture(e));
  newCard.querySelector('.card__like-button').addEventListener('click', addLikeToCard)

  return newCard
}

//================ open popap for add  new card ===================

buttonAddCard.addEventListener('click', ev => openPopup(popupAddCardPlace))
popupAddCardCloseBtn.addEventListener('click', ev => closePopup(popupAddCardPlace))


//================ add card ===================

function addNewCard() {
  const valueCard = {
    link: inputPlaceImgLink.value,
    name: inputPlaceCall.value
  }
  return cards.prepend(createCards(valueCard))
};

popupAddCardSaveBtn.addEventListener('submit', ev => {
  ev.preventDefault()
  addNewCard()
  ev.target.reset()
  closePopup(popupAddCardPlace)
})

//================ delete card ===================

function deleteCard(select) {
  const cardItem = select.target.closest('.card');
  cardItem.remove()
}

//================ like card ===================


function addLikeToCard(el) {
  el.target.closest('.card__like-button').classList.toggle('card__like-button_active')
}

//================ open/close popup picture ===================

function showPicture(event) {
  const { src, alt } = event.target
  popupPictureImage.src = src
  popupPictureName.textContent = alt
  popupPictureImage.setAttribute('alt', alt)
  openPopup(popupPicture)
}

btnPopupPictureClose.addEventListener('click', (ev) => {
  closePopup(popupPicture)
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened)
  }
})

popup.forEach(popupElement => popupElement.addEventListener('click', evt => {
  if (Array.from(evt.target.classList).includes('popup_opened')) {
    evt.target.classList.remove('popup_opened')
  }
}))


//=========================== render cards ===============================

function renderCards(arrDB) {
  arrDB.forEach(element => {
    cards.append(createCards(element))
  });
}
renderCards(initialCards)
