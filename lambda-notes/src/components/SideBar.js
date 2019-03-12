import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

const SideBar = props => {
  return (
    <div className="sidebar-container">
      <h1>Lambda Notes</h1>
      <Link to="/" onClick={props.fetchNotes}>
        <Button text="View Your Notes" />
      </Link>
      <Link to="/create">
        <Button text="+ Create New Note" />
      </Link>
    </div>
  );
};

export default SideBar;
