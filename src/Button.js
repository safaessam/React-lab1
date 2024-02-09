import React from 'react';
import './Button.css';

class Button extends  React.Component {
  render() {
    const { text, onClick } = this.props;

    return (
      <button className="custom-button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
