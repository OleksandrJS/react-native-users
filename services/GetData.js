/** @format */

export default class GetData {
  _URL = 'https://jsonplaceholder.typicode.com';

  getData = async (url) => {
    const res = await fetch(url);
    if (res.ok) {
      return await res.json();
    }
    throw new Error(`Error ${res.status}`);
  };

  getAuthors = async () => {
    return await this.getData(this._URL + '/users');
  };

  getPosts = async () => {
    return await this.getData(this._URL + '/posts');
  };
}
