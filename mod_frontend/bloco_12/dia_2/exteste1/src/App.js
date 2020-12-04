import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.state = {
      motivo: '',
      cidade: 'maceio',  
      idade: 0,
      vaiViajarDeAviao: false,
    };
  }

  handleTextChange(event) {
    this.setState({
      motivo: event.target.value,
    });
  }

  handleCityChange(event) {
    this.setState({
      cidade: event.target.value,
    });
  }

  handleAgeChange(event) {
    this.setState({
      idade: event.target.value,
    });
  }

  handleInputChange(event) {
    this.setState({
      vaiViajarDeAviao: event.target.checked,
    });
  }

  render() {
    return (
      <div>
        <h1>Minha próxima viagem</h1>
        <form>
          <select value={this.state.cidade} onChange={this.handleCityChange}>
            <option value="rioDeJaneiro">Rio de Janeiro</option>
            <option value="saoPaulo">São Paulo</option>
            <option /* selected  */value={this.state.cidade}>Maceió</option>
          </select>
          <label>idade
            <input type="number" name="idade" value={this.state.idade} onChange={this.handleAgeChange}/>
          </label>
          <label>Viagem de avião?
            <input type="checkbox" name="vaiViajarDeAviao" checked={this.state.vaiViajarDeAviao} onChange={this.handleInputChange} />
          </label>
          <label>
            Descreva a sua motivação para conhecer essa cidade
            <textarea name="motivo" value={this.state.motivo} onChange={this.handleTextChange} />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
