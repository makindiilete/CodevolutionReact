/*

*/

//App.js
import "./App.css";
import HoverCounter from "./components/Higher Order Component/HoverCounter";

function App() {
  return (
    <div className="App">
      {/*This component is inside a HOC so ds props will not go to d component directly but to d HOC*/}
      <ClickCounter name="Michaelz" />
      <HoverCounter />
    </div>
  );
}

export default App;

//ClickCounter.js
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

//HoverCounter.js
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

//withCounter.js
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
