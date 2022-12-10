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
const cardAddBotton = document.querySelector('.profile__add-button')

function getProfileDataToForm() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileSubtitle.textContent;
};

function editProfile() {
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
};

function popupOpen() {
  popup.classList.add('popup_opened');
  getProfileDataToForm();
};

function popupClose() {
  popup.classList.remove('popup_opened');
};

editButton.addEventListener('click', popupOpen);

buttonPopupSave.addEventListener('click', popupClose);

saveEditButton.addEventListener('click', (e) => {
  e.preventDefault();
  editProfile();
  popupClose();
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

function createCard(arrDB) {

  arrDB.forEach(element => {
    const newCard = template.content.cloneNode(true)
    newCard.querySelector('.card__img').src
      = element.link;
    newCard.querySelector('.card__img').alt
      = element.name;
    newCard.querySelector('.card__title').textContent
      = element.name;

    cards.append(newCard)
  });
}

createCard(initialCards)


//================ add  new card ===================

