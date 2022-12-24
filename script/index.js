function popupOpen(popupItem) {
  popupItem.classList.add('popup_opened');
};

function popupClose(popupitem) {
  popupitem.classList.remove('popup_opened');
};

// ========================edit profile ================================
const profileSubtitle = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__input_type_name')
const inputDescription = document.querySelector('.popup__input_type_description')
const popup = document.querySelector('#popup-edit-profile')
const saveEditButton = popup.querySelector('.popup__form')
const editButton = document.querySelector('.profile__edit-button')
const buttonPopupClose = document.querySelector('.popup__close-icon')
const profileName = document.querySelector('.profile__title');

function getProfileDataToForm() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileSubtitle.textContent;
};

function editProfile() {
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
};

editButton.addEventListener('click', () => {
  popupOpen(popup);
  getProfileDataToForm();
});

buttonPopupClose.addEventListener('click', () => popupClose(popup));

saveEditButton.addEventListener('submit', (e) => {
  e.preventDefault();
  editProfile();
  popupClose(popup);
});
//================ create new cards ===================
const cards = document.querySelector('.cards')
const template = document.querySelector('#template')

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


const buttonAddCard = document.querySelector('.profile__add-button')
const popupAddCardPlace = document.querySelector('#popup-add-card')
const popupAddCardCloseBtn = document.querySelector('#popup-close-btn')
const popupAddCardSaveBtn = popupAddCardPlace.querySelector('.popup__form')


buttonAddCard.addEventListener('click', ev => popupOpen(popupAddCardPlace))
popupAddCardCloseBtn.addEventListener('click', ev => popupClose(popupAddCardPlace))


//================ add card ===================
const inputPlaceImgLink = document.querySelector('.popup__input_type_image_link')
const inputPlaceCall = document.querySelector('.popup__input_type_place-call')

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
  inputPlaceCall.value = ''
  inputPlaceImgLink.value = ''
  popupClose(popupAddCardPlace)
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

const cardPlaceImage = document.querySelector('.card')
const btnPopupPictureClose = document.querySelector('#close-picture-popup')
const popupPicture = document.querySelector('#popup-picture-card')


function showPicture(event) {
  const { src, alt } = event.target
  popupPicture.querySelector('.popup__image').src = src
  popupPicture.querySelector('.popup__title_type_picture').textContent = alt
  popupOpen(popupPicture)
}

btnPopupPictureClose.addEventListener('click', (ev) => {
  popupClose(popupPicture)
});

//=========================== render cards ===============================

function renderCards(arrDB) {
  arrDB.forEach(element => {
    cards.append(createCards(element))
  });
}

renderCards(initialCards)
