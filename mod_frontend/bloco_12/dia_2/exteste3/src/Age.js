import React from 'react';

class Age extends React.Component {
  render() {
    const idade = this.props.idade;
    const handleChange = this.props.handleChange;

    return (
      <label>Idade
        <input type="number" name="idade" value={idade} onChange={handleChange}/>
      </label>
    )
  }
}

export default Age;
