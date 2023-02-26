import Popup from "./Popup"

export default class PopupWithConfirm extends Popup {
  constructor (popupSelector, handleSubmitCommandDel){
    super(popupSelector)
    this._popupConfirmDelForm = document.querySelector(popupSelector);
    this._popupConfirmDelBtn = this._popupConfirmDelForm.querySelector('#popup-delete-card-btn')
    this._handleSubmitCommandDel = handleSubmitCommandDel
  }

    setEventListeners(){
      super.setEventListeners();
      this._popupConfirmDelBtn.addEventListener('mousedown',()=>{
        this._handleSubmitCommandDel(this._cardTarget)
      })
    }
    open(cardTarget){
      super.open();
      this._cardTarget = cardTarget;
    }
}
