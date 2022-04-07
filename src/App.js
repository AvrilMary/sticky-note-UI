import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

class App extends Component {
  state = {
    notes: [
      { id: Date.now(), title: "", description: "", doesMatchSearch: true }
    ],
    searchText: ""
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    const updateNotes = [newNote, ...this.state.notes];
    this.setState({ notes: updateNotes });
  };

  onType = (editmeID, updatedKey, updatedValue) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (editmeID !== note.id) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({ notes: updatedNotes });
  };

  deleteNote = (deletemeID) => {
    const callbackFunction = (note) => {
      if (deletemeID !== note.id) {
        return note;
      }
    };
    const updatedNotes = this.state.notes.filter(callbackFunction);
    this.setState({ notes: updatedNotes });
  };

  onSearch = (userInput) => {
    //console.log(userInput);
    const lowercaseInput = userInput.toLowerCase();
    const searchNote = this.state.notes.map((note) => {
      if (!lowercaseInput) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(lowercaseInput);
        const descriptionMatch = description.includes(lowercaseInput);
        const hasMatch = titleMatch || descriptionMatch;

        if (hasMatch) {
          note.doesMatchSearch = true;
          return note;
        } else {
          note.doesMatchSearch = false;
          return note;
        }
      }
    });
    this.setState({ notes: searchNote, searchText: userInput });
  };

  componentDidUpdate() {
    const savedNoteString = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", savedNoteString);
  }
  componentDidMount() {
    const reloadNotes = localStorage.getItem("savedNotes");
    if (reloadNotes) {
      const savedNotes = JSON.parse(reloadNotes);
      this.setState({ notes: savedNotes });
    }
  }

  render() {
    return (
      <div>
        <Header
          searchText={this.state.searchText}
          addNote={this.addNote}
          onSearch={this.onSearch}
        />
        <NotesList
          notes={this.state.notes}
          onType={this.onType}
          deleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default App;
