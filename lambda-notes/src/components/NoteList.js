import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/notelist.css';
import NoteItem from './NoteItem';

const NoteList = props => {
  const renderedList = props.notes.map(note => {
    return (
      <Link to={`/view/${note._id}`} key={note._id}>
        <NoteItem note={note} />
      </Link>
    );
  });

  return <div className="notelist-container">{renderedList}</div>;
};

export default NoteList;
