import React, { Component } from 'react';
import Button from './Components/Button';

export default class App extends Component {
  // metodo de criação de função para o Button
  buttonAction = () => {
    console.log('Teste do component button');
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Redux</h1>
        <Button buttonAction={this.buttonAction} />
      </div>
    );
  }
}
