import React, { Component } from 'react';
import axios from 'axios';

class CreateNote extends Component {
  state = {
    title: '',
    body: '',
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    const note = {
      title: this.state.title,
      textBody: this.state.body,
    };

    console.log(note);

    axios
      .post('https://fe-notes.herokuapp.com/note/create', note)
      .then(() => {
        this.setState({ title: '', body: '' });
      })
      .catch(err => alert('Error creating note', err));
  };

  render() {
    return (
      <div className="form-container">
        <h1>Create New Note:</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            required
            className="input-title"
            placeholder="Note Title"
            name="title"
            value={this.state.title}
            onChange={this.onInputChange}
          />
          <br />
          <textarea
            required
            className="textarea-content"
            placeholder="Note Content"
            name="body"
            value={this.state.body}
            onChange={this.onInputChange}
          />
          <br />
          <button className="note-button">Save</button>
        </form>
      </div>
    );
  }
}

export default CreateNote;
