const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = 'O Senhor dos Anéis';

const getNameAndBook = objects => {
  return {
    author: objects.author.name,
    book: objects.name
  }
}

const getAuthorNameInArray = object => {
  object.author.split('');
}

const findNameWithThreeDots = array => {
  return (array[1] === '.' && array[4] === '.' && array[7] === '.');
}

function authorWith3DotsOnName() {
/*   
  const authorsNamesAndBooks = books.map(getNameAndBook);
  const arrayOfAuthorName = authorsNamesAndBooks.map(getAuthorNameInArray);
  const nameWithThreeDots = arrayOfAuthorName.find(findNameWithThreeDots);
  const authorDefined = nameWithThreeDots.join('');
  const bookFound = authorsNamesAndBooks.find((compare) => compare.author === authorDefined);
  return bookFound.book; 
*/

  return books.find((object) => {
    const nameSplitted = object.author.name.split('');
    return (nameSplitted[1] === '.' && nameSplitted[4] === '.' && nameSplitted[7] === '.');
  }).name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expected_result);