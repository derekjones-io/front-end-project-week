import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import '../styles/noteview.css';

class NoteView extends Component {
  handleDeleteNote = event => {
    event.preventDefault();

    this.props.deleteNote(this.props.match.params.id);

    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="edit-delete">
          <p className="edit-delete-text">
            <Link to={`/edit/${this.props.match.params.id}`}>edit</Link>
          </p>
          <p className="edit-delete-text">
            <a onClick={this.handleDeleteNote}>delete</a>
          </p>
        </div>
        {this.props.notes.map(note => {
          if (this.props.match.params.id === note._id) {
            return (
              <div className="note-view-container" key={note._id}>
                <p className="view-note-title">{note.title}</p>
                <p className="view-note-body">{note.textBody}</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default NoteView;
