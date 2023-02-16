
export default class Card {
  constructor({ cardData, handleCardClick }, templateCardSelector,) {
    this._link = cardData.link,
      this._name = cardData.name,
      this._cardTemplate = document.querySelector(templateCardSelector).content.querySelector('.card'),
      this._newCard = this._cardTemplate.cloneNode(true),
      this._cardImage = this._newCard.querySelector('.card__img'),
      this._cardTitle = this._newCard.querySelector('.card__title'),
      this.btnDeleteCard = this._newCard.querySelector('.card__delete-button'),
      this.btnLikeCard = this._newCard.querySelector('.card__like-button');
    this.handleCardClick = handleCardClick
  }
  _addEventListenersToButtons = () => {
    this.btnDeleteCard.addEventListener('click', () => this._handleDeleteCard());
    this.btnLikeCard.addEventListener('click', () => this._handlePushToggleLike())
    this._cardImage.addEventListener('click', this.handleCardClick);
  }
  _handleDeleteCard() {
    this._newCard.remove()
  }
  _handlePushToggleLike() {
    this.btnLikeCard.classList.toggle('card__like-button_active')
  }
  createCard() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._addEventListenersToButtons()
    return this._newCard
  }
}
