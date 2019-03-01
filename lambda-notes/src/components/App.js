import React from 'react';
import axios from 'axios';
import 'normalize.css/normalize.css';

import '../styles/app.css';
import NoteList from './NoteList';
import SideBar from './SideBar';

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
    console.log(response.data);
  };

  render() {
    return (
      <div className="container">
        <SideBar />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
