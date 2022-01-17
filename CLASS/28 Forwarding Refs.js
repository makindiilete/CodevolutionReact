/*
Fowarding ref is a method of passing a ref from a parent component to one of its children
*/

//ForwardRefParentInput.js
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

//ForwardRefChildInput.js
import React, { useEffect } from "react";

const ForwardRefChildInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default ForwardRefChildInput;
