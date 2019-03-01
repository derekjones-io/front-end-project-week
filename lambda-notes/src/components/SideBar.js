import React from 'react';

import '../styles/sidebar.css';
import Button from './Button';

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <h1>Lambda Notes</h1>
      <Button text="View Your Note" />
      <Button text="+ Create New Note" />
    </div>
  );
};

export default SideBar;
