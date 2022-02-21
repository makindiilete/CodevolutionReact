//ParentRef.js
import React, { Component } from "react";
import ChildRef from "./ChildRef";

class ParentRef extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  /*ds method on click call the focusInput method of the child component and d method from d child component set focus to the input field declared in dt component*/

  /*So ds way we can call a function declared inside a child component right from d parent component...*/
  handleFocusChildRef = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        {/*Passing a ref from d parent to child*/}
        <ChildRef ref={this.componentRef} />
        <button onClick={this.handleFocusChildRef}>Focus Child Ref</button>
      </div>
    );
  }
}

export default ParentRef;

//ChildRef.js
import React, { Component } from "react";

class ChildRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default ChildRef;
