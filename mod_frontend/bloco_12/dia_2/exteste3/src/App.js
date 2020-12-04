import React from 'react';
import './App.css';
import City from './City';
import Age from './Age';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      cidade: 'maceio',  
      idade: 0,
      errors: {
        cidade: '',  
        idade: '',
      }
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
          <City cidade={this.state.cidade} handleChange={this.handleChange} />
          <Age idade={this.state.idade} handleChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default App;
