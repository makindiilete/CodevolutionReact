import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    //Event handler method 3... ds creates a variable dt binds d this keyword already like in d method 2 so we can go ahead and just call d reference to the function like we did in line 26
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log(this);
    /* d 'this' keyword is undefined in an event handler and dt is d reason why event binding is required in react class component */
    this.setState({ message: "Goodbye" });
  }

  /*Here changing the method to an arrow function simple solves our issue*/
  clickHandlerMethod4 = () => {
    console.log(this);
    /* d 'this' keyword is undefined in an event handler and dt is d reason why event binding is required in react class component */
    this.setState({ message: "Goodbye" });
  };

  render() {
    return (
      <div>
        <br />
        <div>{this.state.message}</div>
        <br />
        {/*ds first method will cause the whole component to re-render which might b costly for complex component*/}
        <button onClick={this.clickHandler.bind(this)}>
          Event Binding Method 1
        </button>
        {/*ds second method simply uses an arrow function*/}
        <button onClick={() => this.clickHandler()}>
          Event Binding Method 2
        </button>
        {/*    With method 3, we already defined our event handler as a variable binded to 'this' inside d constructor so we can go ahead and just call the event handler normally*/}
        <button onClick={this.clickHandler}>Event Binding Method 3</button>
        <button onClick={this.clickHandlerMethod4}>
          Event Binding Method 4
        </button>
      </div>
    );
  }
}

export default EventBinding;
