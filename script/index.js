const popup = document.querySelector('.popup')
const editButton = document.querySelector('.profile__edit-button')
const buttonPopupSave = document.querySelector('.popup__close-icon')
const profileName = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__input_type_name')
const inputDescription = document.querySelector('.popup__input_type_description')
const saveEditButton = document.querySelector('.popup__save-button')
const cardsBox = document.querySelector('.cards');
const cards = document.querySelector('.cards')
const template = document.querySelector('#template')

function getProfileDataToForm() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileSubtitle.textContent;
};

function editProfile() {
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
};

function popupOpen(popupitem) {
  popupitem.classList.add('popup_opened');
  getProfileDataToForm();
};

function popupClose(popupitem) {
  popupitem.classList.remove('popup_opened');
};

editButton.addEventListener('click', () => popupOpen(popup));

buttonPopupSave.addEventListener('click', () => popupClose(popup));

saveEditButton.addEventListener('click', (e) => {
  e.preventDefault();
  editProfile();
  popupClose(popup);
});
//================ create new cards ===================

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

function renderCards(arrDB) {

  arrDB.forEach(element => {
    const newCard = template.content.cloneNode(true)
    newCard.querySelector('.card__img').src
      = element.link;
    newCard.querySelector('.card__img').alt
      = element.name;
    newCard.querySelector('.card__title').textContent
      = element.name;
      newCard.querySelector('.card__delete-button').addEventListener('click', deleteCard);

    cards.append(newCard)
  });
}

renderCards(initialCards)


//================ open popap for add  new card ===================


const buttonAddCard = document.querySelector('.profile__add-button')
const popupAddCardPlace = document.querySelector('#popup-add-card')
const popupAddCardCloseBtn = document.querySelector('#popup-close-btn')
const popupAddCardSaveBtn = document.querySelector('#popup-save-btn')


buttonAddCard.addEventListener('click', ev => popupOpen(popupAddCardPlace))
popupAddCardCloseBtn.addEventListener('click', ev => popupClose(popupAddCardPlace))


//================ add card ===================
const inputPlaceCall = document.querySelector('.popup__input_type_place-call')
const inputPlaceImgLink = document.querySelector('.popup__input_type_image_link')


function addNewCard() {
  const newCard = template.content.cloneNode(true)
  newCard.querySelector('.card__img').src
    = inputPlaceImgLink.value;
  newCard.querySelector('.card__img').alt
    = inputPlaceCall.value;
  newCard.querySelector('.card__title').textContent
    = inputPlaceCall.value;
  newCard.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  return cards.prepend(newCard)
};


popupAddCardSaveBtn.addEventListener('click', ev => {
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

function addCardLike(){
  
  const buttonLikeCard = document.querySelectorAll('.card__like-button')
  
  buttonLikeCard.forEach(el=>{
    el.addEventListener('click', ()=>{
    el.classList.toggle('card__like-button_active')
    })
  })
}
addCardLike()

//================ open popup picture ===================
