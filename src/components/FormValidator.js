export default class FormValidator {
  constructor(validationConfig, formElement) {
    this.validationConfig = validationConfig,
    this._formElement = formElement
    this._inputList = Array.from(this._formElement.querySelectorAll(this.validationConfig.inputSelector));
    this.buttonElement = this._formElement.querySelector(this.validationConfig.activeButtonClass);
  }

  _showError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
    errorElement.classList.add(this.validationConfig.errorClass)
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this.validationConfig.inputErrorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
    errorElement.classList.remove(this.validationConfig.errorClass)
    errorElement.textContent = '';
    inputElement.classList.remove(this.validationConfig.inputErrorClass);
  }


  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideError(inputElement);
    } else {
      this._showError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.buttonElement.classList.add(this.validationConfig.inactiveButtonClass);
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.classList.remove(this.validationConfig.inactiveButtonClass);
      this.buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._formElement.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState();
      }, 0);
    });

    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this.buttonElement, this.validationConfig);
      })
    })
  }
  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement)
    })
  }
  enableValidation() {
    this._setEventListeners()
  }
}
