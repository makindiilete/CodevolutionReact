import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  /*  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };*/
  render() {
    return (
      <div>
        <button onClick={() => this.props.incrementCount()}>
          {/*d 'name' is a prop passed to ds component from the HOC*/}
          {this.props.name} Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

// Ds is d HOC pattern
// (Component, parameters)
export default withCounter(ClickCounter, 5);
