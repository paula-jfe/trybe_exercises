const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};

window.onload = function () {
  fetchJoke();
}

jest.mock('node-fetch');

describe('mockando requisição api de piadas', () => {
  const jsonFormat = {
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  }

  test('verificando se retorna um objeto contendo a piada', () => {
    fetch.mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(jsonFormat),
    }))

    return fetchJoke()
     .then((data) => expect(data).toBe('Whiteboards ... are remarkable.'));
  });
})
