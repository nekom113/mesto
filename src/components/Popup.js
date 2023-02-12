export default class Popup{
  constructor(popupSelector){
      this._popupItem = popupSelector
      this._handleEscClose = this._handleEscClose.bind(this)
  }
  _handleEscClose = (evt) =>{
      if (evt.key === 'Escape') {
        this.close()
    }
  }

  setEventListeners = () =>{
    this._popupItem.addEventListener('mousedown', (ev) => {
      if (ev.target === this._popupItem || ev.target.classList.contains('popup__close-icon')) {
        this.close();
      }
    });
  }
  open = () =>{
    this._popupItem.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close = () => {
      this._popupItem.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
  }
}



