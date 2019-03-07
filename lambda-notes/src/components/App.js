import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import 'normalize.css/normalize.css';

import '../styles/app.css';
import NoteList from './NoteList';
import SideBar from './SideBar';
import CreateNote from './CreateNote';

class App extends React.Component {
  state = { notes: [] };

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = async () => {
    const response = await axios.get(
      'https://fe-notes.herokuapp.com/note/get/all'
    );

    this.setState({ notes: response.data });
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
            <CreateNote {...props} createNewNote={this.createNewNote} />
          )}
        />
      </div>
    );
  }
}

export default App;
