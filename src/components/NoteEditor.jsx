import React, {Component} from 'react';

class NoteEditor extends Component {
  constructor(props) {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleNoteAdd(e) {
    const newNote = {
      text: this.state.value,
      color: 'yellow',
      id: Date.now()
    };

    this.props.onNoteAdd(newNote);

    this.resetState();
  }

  resetState() {
    this.setState({
        value: ""
    });
  }

  render() {
    return (
      <div className="editor">
        <textarea
          className="editor__textarea"
          onChange={this.handleChange}
          value={this.state.value}
          cols="100" 
          rows="10">
        </textarea>
        <button className="editor__button" onClick={this.handleNoteAdd}>Create</button>
      </div>
    );
  }
}

export default NoteEditor;