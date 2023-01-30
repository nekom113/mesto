export default class FormValidator {
  constructor(validationConfig, controlSelector) {
    this.validationConfig = validationConfig,
      this.controlSelector = controlSelector
  }

  _showError(inputElement) {
    const errorElement = this.controlSelector.querySelector(`.${inputElement.id}-error`)
    errorElement.classList.add(this.validationConfig.errorClass)
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this.validationConfig.inputErrorClass);
  }

  _hideError(inputElement) {
    const errorElement = this.controlSelector.querySelector(`.${inputElement.id}-error`)
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
    return this.inputList.some(inputElement => !inputElement.validity.valid);
  }

  _toggleButtonState() {
    this.inputList = Array.from(this.controlSelector.querySelectorAll(this.validationConfig.inputSelector));
    this.buttonElement = this.controlSelector.querySelector(this.validationConfig.activeButtonClass);
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
    this.controlSelector.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState();
      }, 0);
    });

    this.inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this.inputList, this.buttonElement, this.validationConfig);
      })
    })
  }
  enableValidation() {
    const form = document.querySelector(this.validationConfig.formSelector);
    this._setEventListeners(form, this.validationConfig)
  }
}
