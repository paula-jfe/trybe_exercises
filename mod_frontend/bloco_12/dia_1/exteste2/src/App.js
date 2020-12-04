import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  }

  handleClick = (numberOfClicks) => {
    this.setState((estadoAnterior, _props) => ({
      [numberOfClicks]: estadoAnterior[numberOfClicks] + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick("numeroDeCliques1")}>{this.state.numeroDeCliques1}</button>
        <button onClick={() => this.handleClick("numeroDeCliques2")}>{this.state.numeroDeCliques2}</button>
        <button onClick={() => this.handleClick("numeroDeCliques3")}>{this.state.numeroDeCliques3}</button>
      </div>
    )
  }
}

export default App;
