const popup = document.querySelector('.popup')
// const buttonPopupEdit = document.querySelectorAll('[data-popup-open]')
const editButton = document.querySelector('.profile__edit-button')
// const buttonPopupSave = document.querySelectorAll('[data-popup-close]')
const buttonPopupSave = document.querySelector('.popup__close-icon')

const conteinerPopup = document.querySelector('.popup__container')
const profileName = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const inputEdit = document.querySelectorAll('.popup__input')
const saveEditButton = document.querySelector('.popup__save-button')
const formElement = document.querySelector('.popup__form')



function popupOpen() {
  popup.classList.add('popup_opened')
}
function popupClose() {
  popup.classList.remove('popup_opened')
}

// buttonPopupEdit.forEach(el => {
//   el.addEventListener('click', popupOpen)
// })

// buttonPopupSave.forEach(el => {
//   el.addEventListener('click', popupClose)
// })

editButton.addEventListener('click', popupOpen)
buttonPopupSave.addEventListener('click', () => {
  popupClose();

})

function listenInput() {
  inputEdit.forEach(el => {
    console.log(el)
    if (el.id === 'name') {
      el.placeholder = profileName.innerText
    } else if (el.id === 'description') {
      el.placeholder = profileSubtitle.innerText
    }
  })
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  
  .forEach(el => {
    if (el.id === 'name') {
      profileName.innerText = el.value
    } else if (el.id === 'description') {
      profileSubtitle.innerText = el.value

    }
  })
}

listenInput()
formElement.addEventListener('submit', handleFormSubmit);
