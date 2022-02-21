//Parent component
import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Michaelz",
    };
    console.log("Life cycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life cycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life cycle A componentDidMount");
  }

  render() {
    console.log("Life cycle A render");
    return (
      <>
        <div>Life Cycle A</div>
        <LifeCycleB />
      </>
    );
  }
}

export default LifeCycleA;

//Child component
import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Michaelz",
    };
    console.log("Life cycle B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life cycle B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life cycle B componentDidMount");
  }

  render() {
    console.log("Life cycle B render");
    return <div>Life Cycle B</div>;
  }
}

export default LifeCycleB;
