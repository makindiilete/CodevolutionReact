import React, { Component } from "react";
import ForwardRefChildInput from "./ForwardRefChildInput";

class ForwardRefParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <ForwardRefChildInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default ForwardRefParentInput;
