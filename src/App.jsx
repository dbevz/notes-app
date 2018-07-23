import React, {Component} from 'react';
import NoteEditor from './components/NoteEditor.jsx';
import NotesGrid from './components/NotesGrid.jsx';
import style from  './main.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      notes: []
    };

    this.handleNoteAdd = this.handleNoteAdd.bind(this);
    this.handleNoteDelete = this.handleNoteDelete.bind(this);
  }

  componentDidMount() {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));

    if (savedNotes) {
      this.setState({ notes: savedNotes });
    }
  }

  componentDidUpdate() {
    const notes = JSON.stringify(this.state.notes);

    localStorage.setItem('notes', notes);
  }

  handleNoteAdd(newNote) {
    this.setState({
      notes: [newNote, ...this.state.notes]
  });
  }

  handleNoteDelete(noteId) {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__header test">Notes App</h1>
        <NoteEditor onNoteAdd={this.handleNoteAdd} />
        <NotesGrid data={this.state.notes} onNoteDelete={this.handleNoteDelete} />
      </div>
    );
  }
}

export default App;