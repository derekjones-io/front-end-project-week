import React from 'react';

import NoteItem from './NoteItem';

const NoteList = props => {
  const renderedList = props.notes.map(note => {
    return <NoteItem key={note._id} note={note} />;
  });

  return <div>{renderedList}</div>;
};

export default NoteList;
