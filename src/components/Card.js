import { popupPictureImage, popupPictureName, popupPicture } from '../script/constants.js'
import { openPopup } from '../script/utils.js';

export default class Card {
  constructor(link, name, templateCardSelector) {
    this._link = link,
      this._name = name,
      this._cardTemplate = document.querySelector(templateCardSelector).content.querySelector('.card'),
      this._newCard = this._cardTemplate.cloneNode(true),
      this._cardImage = this._newCard.querySelector('.card__img'),
      this.cardTitle = this._newCard.querySelector('.card__title'),
      this.btnDeleteCard = this._newCard.querySelector('.card__delete-button'),
      this.btnLikeCard = this._newCard.querySelector('.card__like-button')
  }
  _addEventListenersToButtons = () => {
    this.btnDeleteCard.addEventListener('click', () => this._handleDeleteCard());
    this.btnLikeCard.addEventListener('click', () => this._handlePushToggleLike())
    this._cardImage.addEventListener('click', this._handleShowPicture);
  }
  _handleDeleteCard() {
    this._newCard.remove()
  }
  _handlePushToggleLike() {
    this.btnLikeCard.classList.toggle('card__like-button_active')
  }
  _handleShowPicture = () => {
    popupPictureImage.src = this._link
    popupPictureName.textContent = this._name
    popupPictureImage.alt = this._name
    openPopup(popupPicture)
  }
  createCard = () => {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this.cardTitle.textContent = this._name;

    this._addEventListenersToButtons()

    return this._newCard
  }
}


