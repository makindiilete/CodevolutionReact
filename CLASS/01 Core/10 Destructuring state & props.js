//FUnctional component
import React from "react";

//Destructuring inside the function paramater
export const Greet = ({ children, heroName, name }) => {
  //OR as a variable
  // const {children, heroName, name} = props
  return (
    <>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {/*  With props.children, we can access the content passed btw the opening and closing tag of this component*/}
      {children}
    </>
  );
};

//Class component
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
