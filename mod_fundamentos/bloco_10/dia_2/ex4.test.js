const { TestScheduler } = require('jest');
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

test('verify repositories names',() => {
  const url = 'https://api.github.com/users/tryber/repos';
  return getRepos(url).then((result) => {
    expect(result).not.toContain('sd-01-week4-5-project-todo-list');
    expect(result).not.toContain('sd-01-week4-5-project-meme-generator'); 
  });
})
