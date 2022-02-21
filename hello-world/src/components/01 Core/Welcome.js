import React, { Component } from "react";

class Welcome extends Component {
  render() {
    //Destructuring inside class component is done inside the render method
    const { heroName, name } = this.props;
    //Destructuring state
    // const {state1, state2} = this.state
    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    );
  }
}

export default Welcome;
