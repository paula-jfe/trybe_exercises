const fetch = require('node-fetch');

const url = 'https://dog.ceo/api/breeds/image/random';

let requestApi = () => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data.message ? Promise.resolve(data) : Promise.reject(data))
}

window.onload = function () {
  requestApi();
}

/* jest.mock('node-fetch'); */

describe('fazendo requisição para a api dog pictures', () => {
/*   const expectedObject = {
    "message": "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg",
    "status": "success"
  } */

  requestApi = jest.fn();
  afterEach(requestApi.mockReset);

  test('a requisição se resolveu e teve como valor success', () => {
    requestApi.mockResolvedValue('success');

    expect(requestApi()).resolves.toBe("success");
    expect(requestApi).toHaveBeenCalled();
    expect(requestApi).toHaveBeenCalledTimes(1);
  });

  test('a requisição falhou e teve como valor failed', () => {
    requestApi.mockRejectedValue('failed');

    expect(requestApi()).rejects.toBe('failed');
    expect(requestApi).toHaveBeenCalled();
    expect(requestApi).toHaveBeenCalledTimes(1);
  });
})
