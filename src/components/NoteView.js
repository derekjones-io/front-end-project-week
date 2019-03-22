import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody } from 'reactstrap';

// import '../styles/noteview.css';

class NoteView extends Component {
  state = { modal: false };

  handleDeleteNote = event => {
    event.preventDefault();

    this.props.deleteNote(this.props.match.params.id);

    this.props.history.push('/');
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div>
        <div className="edit-delete">
          <div className="edit-delete-text">
            <Link to={`/edit/${this.props.match.params.id}`}>edit</Link>
          </div>
          <div className="edit-delete-text">
            <a onClick={this.toggle}>delete</a>
          </div>
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
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={this.state.backdrop}
        >
          <ModalBody className="modal-container">
            <p>Are you sure you want to delete this?</p>
            <div>
              <Button
                className="modal-button"
                color="danger"
                onClick={this.handleDeleteNote}
              >
                Delete
              </Button>{' '}
              <Button
                className="modal-button"
                color="primary"
                onClick={this.toggle}
              >
                No
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default NoteView;
