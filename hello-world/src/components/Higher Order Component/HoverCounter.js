import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  /*  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };*/
  render() {
    return (
      <div>
        <h1 onMouseOver={() => this.props.incrementCount()}>
          {/*d 'name' is a prop passed to ds component from the HOC*/}
          {this.props.name} Hovered {this.props.count} times
        </h1>
      </div>
    );
  }
}

//Ds is d HOC pattern
// (Component, parameters)
export default withCounter(HoverCounter, 10);
