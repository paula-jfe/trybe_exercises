    /* const fetch = require('node-fetch'); */

    const API_URL = 'https://icanhazdadjoke.com/';

    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };

    const fetchJoke = () => {
      fetch(API_URL, myObject)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const bodyJoke = document.querySelector('#jokeContainer');
          console.log(bodyJoke);
          bodyJoke.innerText = data.joke;
        });
    }
    
    /* fetchJoke(); */

    window.onload = () => fetchJoke();
