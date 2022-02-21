//Functional component
import React, { useEffect } from "react";

const FunctionClick = (props) => {
  function clickHandler() {
    console.log("Button clicked");
  }

  return (
    <div>
      {/*  ds is how u bind a function to an event*/}
      <button onClick={clickHandler}>Click</button>
      {/*  U sud not add an event handler like ds, ds will call d function immediately d component renders without waiting for the user to fire the click event and when d user eventually fires d event, d function will not b called... Also it might cause an infinite loop*/}
      {/*<button onClick={clickHandler()}>Click</button>*/}
    </div>
  );
};

export default FunctionClick;

//Class component
import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Button class clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Click</button>
      </div>
    );
  }
}

export default ClassClick;
