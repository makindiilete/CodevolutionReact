//Counter.js
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  increment() {
    /*setState accepts 2 params, d state property to update and a callback function to call when the update is completed*/
    this.setState(
      {
        count: this.state.count + 1,
      },
      //  so ds will always return the updated value
      () => console.log(`Call back value = ${this.state.count}`)
    );
    /*This will not return the currently updated state, it will always lag behind because technically it get called before the update is done cos the react state update is async*/
    console.log(`Current count = ${this.state.count}`);
  }

  incrementFive() {
    this.setState({ count: this.state.count + 5 });
  }

  render() {
    return (
      <>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>Increment Five</button>
      </>
    );
  }
}

export default Counter;
