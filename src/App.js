import React, { Component } from 'react';
import './App.css';
import Notes from './components/Notes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  onNoteDelete = (indexToRemove) => {
    this.setState(oldState => {
      return {
        notes: withoutIdex(oldState.notes, indexToRemove)
      };
    });
  };

  onNoteCreate = newNoteText => {
    this.setState(oldState => {
      return {
        notes: [newNoteText].concat(oldState.notes)
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Notes 
            notes={this.state.notes} 
            onDelete={this.onNoteDelete} 
            onCreate={this.onNoteCreate}
        />
      </div>
    )
  }
}

const withoutIdex = (array, index) => array.slice(0, index).concat(array.slice(index + 1));

export default App;
