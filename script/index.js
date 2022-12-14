const profileSubtitle = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('#name')
const inputDescription = document.querySelector('#description')
const profilePopup = document.querySelector('#popup-edit-profile')
const saveEditButton = profilePopup.querySelector('.popup__form')
const editPopupButton = profilePopup.querySelector('.popup__save-button')
const inputEditProfileList = Array.from(profilePopup.querySelectorAll('.popup__input'))
const editButton = document.querySelector('.profile__edit-button')
const profileCloseButton = document.querySelector('.popup__close-icon')
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
const popupList = document.querySelectorAll('.popup')


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
  document.addEventListener('keydown', closeByEscape);
};

function closePopup(popupItem) {
  if (popupItem) {
    popupItem.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
  }
};

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
//================ create new cards ===================

function createCards({ link, name }) {
  const newCard = template.content.cloneNode(true)
  const cardImage = newCard.querySelector('.card__img')
  cardImage.src = link;
  cardImage.alt = name;
  newCard.querySelector('.card__title').textContent = name;
  newCard.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  cardImage.addEventListener('click', (e) => showPicture(e));
  newCard.querySelector('.card__like-button').addEventListener('click', toggleLike)

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


function toggleLike(el) {
  el.target.classList.toggle('card__like-button_active')
}

//================ open/close popup picture ===================

function showPicture(event) {
  const { src, alt } = event.target
  popupPictureImage.src = src
  popupPictureName.textContent = alt
  popupPictureImage.setAttribute('alt', alt)
  openPopup(popupPicture)
}
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'))
  }
}

btnPopupPictureClose.addEventListener('click', (ev) => {
  closePopup(popupPicture)
});

popupList.forEach(popupElement => popupElement.addEventListener('mousedown', evt => {
  if (Array.from(evt.target.classList).includes('popup_opened')) {
    closePopup(document.querySelector('.popup_opened'))
  }
}))


//=========================== render cards ===============================

function renderCards(arrDB) {
  arrDB.forEach(element => {
    cards.append(createCards(element))
  });
}
renderCards(initialCards)
