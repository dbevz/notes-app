import React, {Component} from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "yellow"
    };
    this.handleSetColor = this.handleSetColor.bind(this);
  }

  handleSetColor(e) {
    const newColor = e.target.innerText
    
    this.setState({color: newColor});
    this.props.onColorChange(newColor);
  }

  render() {
    return(
      <div className="color-picker">
        <span className={"color-picker__color color-picker__color--yellow" + (this.state.color === "yellow" ? " active" : "")} onClick={this.handleSetColor}>yellow</span>
        <span className={"color-picker__color color-picker__color--red" + (this.state.color === "red" ? " active" : "")} onClick={this.handleSetColor}>red</span>
        <span className={"color-picker__color color-picker__color--blue" + (this.state.color === "blue" ? " active" : "")} onClick={this.handleSetColor}>blue</span>
        <span className={"color-picker__color color-picker__color--green" + (this.state.color === "green" ? " active" : "")} onClick={this.handleSetColor}>green</span>
        <span className={"color-picker__color color-picker__color--purple" + (this.state.color === "purple" ? " active" : "")} onClick={this.handleSetColor}>purple</span>
        <span className={"color-picker__color color-picker__color--rose" + (this.state.color === "rose" ? " active" : "")} onClick={this.handleSetColor}>rose</span>
      </div>
    );
  }
}

export default ColorPicker;