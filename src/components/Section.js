export default class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }
  addItem = (cardElement) => {
    this._container.prepend(cardElement)
  }
  renderCards = () => {
    this._items.forEach(item => this._renderer(item))
  }
}
