import React, { Component } from 'react';

// import { Container } from './styles';

export default class InputComponent extends Component {
  render() {
    return (
      <>
        <input
          type="text"
          onChange={() => {
            this.props.handleInputText();
          }}
        />
      </>
    );
  }
}
