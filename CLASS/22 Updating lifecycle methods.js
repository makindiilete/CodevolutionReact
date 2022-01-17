/*
#   shouldComponentUpdate : - By default, when the props or state of a component changes, react re-rendered the component.. This lifecycle can be used to prevent that default behavior by comparing the existing state with the new one and then tell if react should go ahead and update or not.
It is rarely used...
*/

//Lifecycle A
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

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("Life cycle A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Life cycle A getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Life cycle A componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Omoakin",
    });
  };

  render() {
    console.log("Life cycle A render");
    return (
      <>
        <div>Life Cycle A</div>
        {/*We need to trigger a change in the component state so our update life cycle methods can get called.. Which we will b doing with this button*/}
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </>
    );
  }
}

export default LifeCycleA;

//Lifecycle B
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

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("Life cycle B shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Life cycle B getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Life cycle B componentDidUpdate");
  }

  render() {
    console.log("Life cycle B render");
    return <div>Life Cycle B</div>;
  }
}

export default LifeCycleB;
