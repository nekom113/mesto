export default class Section {
  constructor(renderer, container) {
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }
  addItem = (cardElement) => {
    this._container.prepend(cardElement)
  }
  renderCards = (cardsData) => {
    cardsData.forEach(item => this._renderer(item))
  }
}
