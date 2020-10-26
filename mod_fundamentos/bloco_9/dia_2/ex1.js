    /* const fetch = require('node-fetch'); */

    const API_URL = 'https://icanhazdadjoke.com/';

    const fetchJoke = () => {
      fetch(API_URL, myObject)
        .then(response => response.json())
        .then(data => {
          const bodyJoke = document.querySelector('#jokeContainer');
          bodyJoke.innerText = data.joke;
        });
    }
    
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };

    window.onload = () => fetchJoke();