import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector)
    this._form = this._popupItem.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'))
    this._handleSubmitForm = handleSubmitForm;
  }
  _getInputValues = () => {
    const formInputValues = {}
    this._inputList.forEach(inputElement => {
      formInputValues[inputElement.name] = inputElement.value;
    })

    return formInputValues
  }
  setEventListeners = () => {

    super.setEventListeners();

    this._form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      this._handleSubmitForm(this._getInputValues())
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}
