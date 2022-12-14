const validationConfig = {
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active',
  inactiveButtonClass: 'popup__save-button_inactive',
  activeButtonClass: '.popup__save-button',
  inputSelector: '.popup__input',
  formSelector: '.popup__form'
}


function showError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  errorElement.classList.add(config.errorClass)
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
}

function hideError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  errorElement.classList.remove(config.errorClass)
  errorElement.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
}


function checkInputValidity(formElement, inputElement, config) {
  if (inputElement.validity.valid) {
    hideError(formElement, inputElement, config);
  } else {
    showError(formElement, inputElement, config);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid);
}

function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.activeButtonClass);

  toggleButtonState(inputList, buttonElement, config);
  formElement.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, config);
    }, 0);
  });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    })
  })
}


function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, config)
  })

}

enableValidation(validationConfig)
