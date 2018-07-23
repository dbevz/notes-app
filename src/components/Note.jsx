import React, {Component} from 'react';

class Note extends Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <div className={"note" + " note--" + this.props.color}>
        <span className="note__delete-icon" onClick={this.handleDelete}>×</span>
        {this.props.text}
      </div>
    );
  }
}

export default Note;