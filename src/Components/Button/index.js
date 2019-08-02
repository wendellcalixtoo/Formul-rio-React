import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    // const { buttonAction } = this.props;
    return (
      <>
        <button
          type="submit"
          onClick={() => {
            this.props.buttonAction();
          }}
        >
          Click me
        </button>
      </>
    );
  }
}
