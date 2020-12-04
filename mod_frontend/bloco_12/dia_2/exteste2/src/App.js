import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      motivo: '',
      cidade: 'maceio',  
      idade: 0,
      vaiViajarDeAviao: false,
    };
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Minha próxima viagem</h1>
        <form>
          <select name="cidade" value={this.state.cidade} onChange={this.handleChange}>
            <option value="rioDeJaneiro">Rio de Janeiro</option>
            <option value="saoPaulo">São Paulo</option>
            <option /* selected  */value={this.state.cidade}>Maceió</option>
          </select>
          <label>Idade
            <input type="number" name="idade" value={this.state.idade} onChange={this.handleChange}/>
          </label>
          <label>Viagem de avião?
            <input type="checkbox" name="vaiViajarDeAviao" checked={this.state.vaiViajarDeAviao} onChange={this.handleChange} />
          </label>
          <fieldset>Compartilhe sua viagem
            <label>
              O que gosta nessa cidade?
              <textarea name="motivo" value={this.state.motivo} onChange={this.handleChange} />
            </label>
            <label>Envie a foto da sua viagem
              <input type="file" />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
