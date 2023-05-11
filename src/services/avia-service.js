export default class AviaService {
  constructor() {
    this._url = 'https://front-test.dev.aviasales.ru';
  }

  async getSearchId() {
    const url = `${this._url}/search`;
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    });
    console.log(url);
    if (!res.ok) {
      throw new Error(`Status code: ${res.status}`);
    }
    const data = await res.json();

    return data;
  }
}
