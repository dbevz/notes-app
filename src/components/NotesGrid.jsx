import React, {Component} from 'react';
import Note from './Note.jsx';
import Masonry from 'masonry-layout';


class NotesGrid extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const grid = this.grid;
    this.msnry = new Masonry(grid, {
      columnWidth: 240,
      gutter: 10,
      isFitWidth: true
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.length !== prevProps.data.length) {
      this.msnry.reloadItems();
      this.msnry.layout();
    }
  }

  render() {
    return <div className="grid" ref={c => this.grid = c}>
      {
        this.props.data.map((item) => 
          <Note
            key={item.id}
            id={item.id}
            text={item.text}
            color={item.color} 
            onDelete={this.props.onNoteDelete}
          />
        )
      }
    </div>
  }
}

export default NotesGrid;