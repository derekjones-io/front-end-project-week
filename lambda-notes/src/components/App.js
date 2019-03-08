import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import 'normalize.css/normalize.css';

import '../styles/app.css';
import NoteList from './NoteList';
import SideBar from './SideBar';
import CreateNote from './CreateNote';
import NoteView from './NoteView';
import EditNote from './EditNote';

class App extends Component {
  state = { notes: [] };

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = () => {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({ notes: response.data }))
      .catch(err => console.log('Error fetching notes', err));
  };

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(() => this.fetchNotes())
      .catch(err => console.log('Error deleting note', err));
  };

  render() {
    return (
      <div className="container">
        <SideBar fetchNotes={this.fetchNotes} />
        <Route
          exact
          path="/"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
        <Route
          path="/create"
          render={props => (
            <CreateNote {...props} fetchNotes={this.fetchNotes} />
          )}
        />
        <Route
          path="/view/:id"
          render={props => (
            <NoteView
              {...props}
              notes={this.state.notes}
              deleteNote={this.deleteNote}
            />
          )}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <EditNote
              {...props}
              notes={this.state.notes}
              getNotes={this.fetchNotes}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
