import { popupPictureImage, popupPictureName, popupPicture } from './config.js'
import { openPopup } from './utils.js';

export default class Card {
  constructor(link, name, templateCardSelector) {
    this._link = link,
    this._name = name,
    this._templateCardSelector = document.querySelector(templateCardSelector).content.querySelector('.card'),
    this._newCard = this._templateCardSelector.cloneNode(true),
    this._cardImage = this._newCard.querySelector('.card__img'),
    this.cardTitle = this._newCard.querySelector('.card__title'),
    this.btnDeleteCard = this._newCard.querySelector('.card__delete-button'),
    this.btnLikeCard = this._newCard.querySelector('.card__like-button')
  }
  createCards = () => {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this.cardTitle.textContent = this._name;

    this._addEventListenersToButtons()

    return this._newCard
  }
  _addEventListenersToButtons = () => {
    this.btnDeleteCard.addEventListener('click', () => this._deleteCard());
    this.btnLikeCard.addEventListener('click', () => this._pushToggleLike())
    this._cardImage.addEventListener('click', this._showPicture);
  }
  _deleteCard() {
    this._newCard.remove()
  }
  _pushToggleLike() {
    this._newCard.querySelector('.card__like-button').classList.toggle('card__like-button_active')
  }
  _showPicture = () => {
    popupPictureImage.src = this._link
    popupPictureName.textContent = this._name
    popupPictureImage.setAttribute('alt', this._name)
    openPopup(popupPicture)
  }

}


