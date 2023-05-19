import { store } from '../redux_components/store/store.js';

export default class AviaService {
  constructor() {
    this._url = 'https://aviasales-test-api.kata.academy';
  }

  async getSearchId() {
    const url = `${this._url}/search`;
    let res;
    try {
      res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
      });
      if (!res.ok) {
        throw new Error(`Status code: ${res.status}`);
      }
      const data = await res.json();

      return data;
    } catch (err) {
      store.dispatch({ type: 'ERROR' });
    }
  }

  async getTickets(id) {
    const url = `${this._url}/tickets?searchId=${id}`;
    let res;
    try {
      res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      store.dispatch({ type: 'ERROR' });
    }
  }
}
