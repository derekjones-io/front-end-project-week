import React from 'react';
import { Link } from 'react-router-dom';

// import '../styles/notelist.css';
import NoteItem from './NoteItem';

const NoteList = props => {
  const renderedList = props.notes.map(note => {
    return (
      <Link to={`/view/${note._id}`} key={note._id}>
        <NoteItem note={note} />
      </Link>
    );
  });

  return (
    <div className="notelist-container">
      <h1>Your Notes:</h1>
      <div className="note-list">{renderedList}</div>
    </div>
  );
};

export default NoteList;
