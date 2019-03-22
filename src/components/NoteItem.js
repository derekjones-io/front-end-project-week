import React from 'react';

// import '../styles/noteitem.css';

const NoteItem = props => {
  return (
    <div className="note-item">
      <p className="note-title">{props.note.title}</p>
      <p className="note-body">{props.note.textBody}</p>
    </div>
  );
};

export default NoteItem;
