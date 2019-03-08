import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteView extends Component {
  handleDeleteNote = event => {
    event.preventDefault();

    this.props.deleteNote(this.props.match.params.id);

    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div>
          <Link to={`/edit/${this.props.match.params.id}`}>edit</Link>
          <button onClick={this.handleDeleteNote}>delete</button>
        </div>
        {this.props.notes.map(note => {
          if (this.props.match.params.id === note._id) {
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
  }
}

export default NoteView;
