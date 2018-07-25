import React, {Component} from 'react';
import ColorPicker from './ColorPicker.jsx';

class NoteEditor extends Component {
  constructor(props) {
    super();

    this.state = {
      value: "",
      color: "yellow"
    };
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleNoteAdd(e) {
    const newNote = {
      text: this.state.value,
      color: this.state.color,
      id: Date.now()
    };

    this.props.onNoteAdd(newNote);

    this.resetState();
  }

  handleColorChange(newColor) {
    this.setState({
      color: newColor
    });
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
        <div className="editor__buttons">
          <ColorPicker onColorChange={this.handleColorChange} />
          <button className="editor__button" onClick={this.handleNoteAdd}>Create</button>
        </div>
      </div>
    );
  }
}

export default NoteEditor;