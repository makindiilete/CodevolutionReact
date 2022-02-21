/*
#   As pure component is to class component, so is Memo is to functional component..

Your react version needs to be at least 16.6.0 to be able to use React.memo()
*/

//MemoComp.js
import React, { useEffect } from "react";

const MemoComp = ({ name }) => {
  console.log("Rendering memo functional component");
  return <div>{name}</div>;
};

export default React.memo(MemoComp);

//ParentComp.js
import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Michaelz",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Michaelz" });
    }, 2000);
  }

  render() {
    console.log("******************Parent Component Render******************");
    return (
      <>
        <div>Parent Component</div>
        {/*<RegComp name={this.state.name} />*/}
        {/*<PureComp name={this.state.name} />*/}
        <MemoComp name={this.state.name} />
      </>
    );
  }
}

export default ParentComp;
