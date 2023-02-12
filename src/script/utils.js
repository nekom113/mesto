export function openPopup(popupItem) {
  popupItem.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

export function closePopup(popupItem) {
  if (popupItem) {
    popupItem.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
  }
};

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'))
  }
}
