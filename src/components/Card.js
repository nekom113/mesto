
export default class Card {
  constructor({ cardData, handleCardClick, handleLikeCardClick, handleConfirmDelete, handleControlCardLike }, templateCardSelector, userData) {
      this._cardData = cardData
      this._userData = userData;
      this._link = cardData.link,
      this._name = cardData.name,
      this._likesInfo = cardData.likes
      this._cardTemplate = document.querySelector(templateCardSelector).content.querySelector('.card'),
      this._newCard = this._cardTemplate.cloneNode(true),
      this._cardImage = this._newCard.querySelector('.card__img'),
      this._cardTitle = this._newCard.querySelector('.card__title'),
      this.btnDeleteCard = this._newCard.querySelector('.card__delete-button'),
      this.btnLikeCard = this._newCard.querySelector('.card__like-button');
      this._likeTable = this._newCard.querySelector('.card__likes-count')
      this._handleLikeCardClick = handleLikeCardClick;
      this.handleConfirmDelete = handleConfirmDelete;
      this.handleControlCardLike = handleControlCardLike;
      this.handleCardClick = handleCardClick
  }
  _addEventListenersToButtons = () => {
    this.btnDeleteCard.addEventListener('mousedown', () => this.handleConfirmDelete(this));
    this.btnLikeCard.addEventListener('mousedown', () => this.handleControlCardLike(this))
    this._cardImage.addEventListener('click', this.handleCardClick);
  }
  handleDeleteCard() {
    this._newCard.remove()
  }
  handlePushToggleLike(isLiked) {
    isLiked ? this.btnLikeCard.classList.add('card__like-button_active'):
    this.btnLikeCard.classList.remove('card__like-button_active');

    this._likeTable.textContent = this._cardData.likes.length
  }
  getCardId(){
    return this._cardData._id
  }
  getLikesArr(likesData){
    this._likesInfo = likesData
  }
  checkLikeState(){
    return this._cardData.likes.some((el) => el._id === this._userData.userId)
  }
  changeLikeState(data){
    this._cardData = data
    this.handlePushToggleLike(this.checkLikeState())
  }
  createCard() {
  if(this._cardData.owner._id !== this._userData.userId){
    this.btnDeleteCard.style.display = 'none'
  }
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._likeTable.textContent = this._likesInfo.length
    this._addEventListenersToButtons()
    this.handlePushToggleLike(this.checkLikeState())
    return this._newCard
  }
}
