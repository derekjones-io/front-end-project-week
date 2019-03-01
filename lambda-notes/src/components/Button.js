import React from 'react';

import '../styles/button.css';

const Button = props => {
  return (
    <button>
      <p>{props.text}</p>
    </button>
  );
};

export default Button;
