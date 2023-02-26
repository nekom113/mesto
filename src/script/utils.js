export function showLoader(useButton, loaderText){
  const targetButton = document.querySelector(useButton).querySelector('.popup__save-button')
  targetButton.textContent = loaderText
}
