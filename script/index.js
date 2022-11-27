const popup = document.querySelector('.popup')
const buttonPopupEdit = document.querySelectorAll('[data-popup-open]')
const buttonPopupSafe = document.querySelectorAll('[data-popup-close]')
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

buttonPopupEdit.forEach(el => {
  el.addEventListener('click', popupOpen)
})

buttonPopupSafe.forEach(el => {
  el.addEventListener('click', popupClose)
})


function listenPlaceholder() {
  inputEdit.forEach(el => {
    if (el.id === 'name') {
      el.placeholder = profileName.innerText
    } else if (el.id === 'description') {
      el.placeholder = profileSubtitle.innerText
    }
  })
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  inputEdit.forEach(el => {
    if (el.id === 'name') {
      profileName.innerText = el.value
    } else if (el.id === 'description') {
      profileSubtitle.innerText = el.value

    }
  })
}

listenPlaceholder()
formElement.addEventListener('submit', handleFormSubmit);
