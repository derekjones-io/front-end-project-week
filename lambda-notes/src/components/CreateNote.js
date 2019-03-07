import React, { Component } from 'react';
import axios from 'axios';

class CreateNote extends Component {
  state = {
    title: '',
    content: '',
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = async event => {
    event.preventDefault();

    const note = {
      title: this.state.title,
      textContent: this.state.content,
    };

    console.log(note);

    axios
      .post('https://fe-notes.herokuapp.com/note/create', note)
      .then(() => {
        this.setState({ title: '', content: '' });
      })
      .catch(() => alert('Error adding your note. Please try again!'));
  };

  render() {
    return (
      <div>
        <h1>Create New Note:</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            required
            placeholder="Note Title"
            name="title"
            value={this.state.title}
            onChange={this.onInputChange}
          />
          <br />
          <input
            required
            rows="10"
            cols="70"
            placeholder="Note Content"
            name="content"
            value={this.state.content}
            onChange={this.onInputChange}
          />
          <br />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default CreateNote;
