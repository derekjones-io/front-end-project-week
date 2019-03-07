import React from 'react';

import '../styles/button.css';

const Button = props => {
  return (
    <button className="btn navbtn">
      <p>{props.text}</p>
    </button>
  );
};

export default Button;
