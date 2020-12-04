import React from 'react';

class City extends React.Component {
  render() {
    const cidade = this.props.cidade;
    const handleChange = this.props.handleChange;
    let error = undefined;

    if (cidade.length < 0) error = 'Required';

    return (
      <label>
        <select name="cidade" value={cidade} onChange={handleChange}>
          <option value="rioDeJaneiro">Rio de Janeiro</option>
          <option value="saoPaulo">São Paulo</option> 
          <option value={cidade}>Maceió</option>
        </select>
        <span>{error ? error : ''}</span>
      </label>
      
    )
  }
}

export default City;
