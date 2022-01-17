//Parent Component
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };
  }

  greetParent = (childName) => {
    /*this.setState({ parentName: childName }, () =>
          alert(`Hello ${this.state.parentName}`)
        );*/
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };

  render() {
    return (
      <div>
        <ChildComponent greetParent={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;

//Child Component
import React, { useEffect } from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={props.greetParent}>Greet Parent</button>
      {/*  Passing parameter to d parent method handler*/}
      <button onClick={() => props.greetParent("child")}>
        Greet Parent With Params
      </button>
    </div>
  );
};

export default ChildComponent;
