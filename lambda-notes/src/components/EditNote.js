import React, { Component } from 'react';
import axios from 'axios';

class EditNote extends Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount() {
    console.log(this.props.notes);
    this.props.notes.map(note => {
      if (this.props.match.params.id === note._id) {
        console.log(note);
        this.setState({ title: note.title, body: note.textBody });
      }
    });
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    const id = this.props.match.params.id;
    const note = {
      title: this.state.title,
      textBody: this.state.body,
    };

    console.log(note);

    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
      .then(() => {
        this.setState({ title: '', body: '' });
      })
      .catch(err => alert('Error editing note', err));
  };

  render() {
    return (
      <div>
        <h1>Edit Note:</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            required
            className="input-title"
            placeholder="Note Title"
            name="title"
            value={this.state.title}
            onChange={this.onInputChange}
          />
          <textarea
            required
            className="textarea-content"
            placeholder="Note Content"
            name="body"
            value={this.state.body}
            onChange={this.onInputChange}
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default EditNote;
