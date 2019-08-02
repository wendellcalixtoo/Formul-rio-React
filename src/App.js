import React, { Component } from 'react';
import ButtonComponent from './Components/Button';
// import InputComponent from './Components/Input';

export default class App extends Component {
  state = {
    campo: '',
  };

  handleInputText = event => {
    this.setState({ campo: event.target.value });
  };

  buttonAction = () => {
    const valor = {
      campo: this.state.campo,
    };
    console.log(valor);
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Redux</h1>
        {/* <InputComponent onChange={this.handleInputText} /> */}
        <input type="text" onChange={this.handleInputText} />
        <ButtonComponent buttonAction={this.buttonAction} />
      </div>
    );
  }
}
