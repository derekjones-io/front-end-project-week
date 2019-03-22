import React from 'react';

// import '../styles/button.css';

const Button = props => {
  return (
    <div className="navbtn">
      <p className="navbtn-text">{props.text}</p>
    </div>
  );
};

export default Button;
