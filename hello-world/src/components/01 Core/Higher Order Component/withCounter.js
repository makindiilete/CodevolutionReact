import React, { Component } from "react";

// (Component, Parameter)
const withCounter = (Wrappedcomponent, incrementNumber) => {
  class WithCounter extends Component {
    state = {
      count: 0,
    };

    incrementCount = () => {
      //Here we are making used of the parameter passed to this HOC from d component using them
      this.setState({ count: this.state.count + incrementNumber });
    };
    render() {
      console.log(this.props);
      return (
        //  {...this.props} passes down other props dt has been passed to components wrapped with this HOC so those component can access those props
        <Wrappedcomponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
