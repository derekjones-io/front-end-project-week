import React from 'react';

import '../styles/noteitem.css';

const NoteItem = props => {
  return (
    <div className="note-item">
      <p>{props.note.title}</p>
      <p>{props.note.textBody}</p>
    </div>
  );
};

export default NoteItem;
