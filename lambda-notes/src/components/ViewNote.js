import React from 'react';

const ViewNote = props => {
  console.log(props.notes);
  return (
    <div>
      <div>
        <div>edit</div>
        <div>delete</div>
      </div>
      {props.notes.map(note => {
        if (props.match.params.id === note._id) {
          return (
            <div key={note._id}>
              <p>{note.title}</p>
              <p>{note.textBody}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ViewNote;
