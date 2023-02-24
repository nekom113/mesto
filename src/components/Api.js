export default class Api{
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers
  }
  _checkResponse(response){
    if (response.ok) {
      return response.json()
      }
     return Promise.reject(response.status)
  }
  getProfileData(){
    return fetch(`${this._baseUrl}/users/me`,{
      headers: this._headers
    })
    .then(this._checkResponse)
  }
  getCardsData(){
    return fetch(`${this._baseUrl}/cards`,{
      headers: this._headers
    })
    .then(this._checkResponse)
  }
}
