import React, { Component } from "react";

class HoverCounterRender extends Component {
  /*  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };*/
  render() {
    const { count, incrementCount } = this.props;
    return <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>;
  }
}

export default HoverCounterRender;
