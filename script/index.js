const popup = document.querySelector('.popup')
const editButton = document.querySelector('.profile__edit-button')
const buttonPopupSave = document.querySelector('.popup__close-icon')
const profileName = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__input_type-name')
const inputDescription = document.querySelector('.popup__input_type-description')
const saveEditButton = document.querySelector('.popup__save-button')

function getProfileDataToForm(){
  inputName.value = profileName.textContent;
  inputDescription.value = profileSubtitle.textContent;
};

function editProfile(){
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
};

function popupOpen() {
  popup.classList.add('popup_opened');
  getProfileDataToForm();
};

function popupClose() {
  popup.classList.remove('popup_opened');
  getProfileDataToForm();
};

editButton.addEventListener('click', popupOpen);

buttonPopupSave.addEventListener('click', popupClose);

saveEditButton.addEventListener('click', (e) =>{
  e.preventDefault();
  editProfile();
  popupClose();
});

