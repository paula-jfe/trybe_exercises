import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log('Clicou!')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Botão 1</button>
        <button onClick={this.handleClick}>Botão 2</button>
        <button onClick={this.handleClick}>Botão 3</button>
      </div>
    )
  }
}

export default App;
