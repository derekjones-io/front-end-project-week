import React from 'react';

import '../styles/notelist.css';
import NoteItem from './NoteItem';

const NoteList = props => {
  const renderedList = props.notes.map(note => {
    return <NoteItem key={note._id} note={note} />;
  });

  return <div className="notelist-container">{renderedList}</div>;
};

export default NoteList;
