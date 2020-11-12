import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick() {
  console.log('Clicou no botão!')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return (
      <div>
        <button onClick={handleClick}>Botão 1</button>
        <button onClick={handleClick}>Botão 2</button>
        <button onClick={handleClick}>Botão 3</button>
      </div>
    )
  }
}

export default App;
