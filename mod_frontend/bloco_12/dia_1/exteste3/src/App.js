import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    
  }

  render() {
    return (
      <div>
        <button className={this.state.numeroDeCliques % 2 === 0 ? "greenButton": ""} onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
      </div>
    )
  }
}

export default App;
