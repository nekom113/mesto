
export default class Section {
  constructor({items, renderer}, containerSelector){
    this._items = items;
    this.renderer = renderer;
    this.containerSelector = document.querySelector(containerSelector);
  }
  addItem = (cardElement) =>{
    this._containerSelector.prepend(cardElement)
  }
  renderCards = () =>{
    this._data.firEach(this.renderer)
  }
}
