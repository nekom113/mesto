export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._userName = document.querySelector(nameSelector)
    this._userAbout = document.querySelector(aboutSelector)
    this._userAvatar = document.querySelector(avatarSelector)
  }
  getUserInfo = () => {
    return {
      userName: this._userName.textContent,
      userAbout: this._userAbout.textContent
    } 
  }
  setUserInfo = ({ name, about, avatar, _id }) => {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
    this._userAvatar.style.backgroundImage = `url(${avatar})`
    this.userId = _id
  }
  
}
