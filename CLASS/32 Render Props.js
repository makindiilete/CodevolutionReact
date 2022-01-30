/*

*/

//App.js
import "./App.css";
import ClickCounterRender from "./components/Render Props/ClickCounterRender";
import HoverCounterRender from "./components/Render Props/HoverCounterRender";
import User from "./components/Render Props/User";
import CounterRender from "./components/Render Props/CounterRender";

function App() {
  return (
    <div className="App">
      {/*    RENDER PROPS  */}
      {/*  <ClickCounterRender />
      <HoverCounterRender />
      <User render={(isLoggedIn) => (isLoggedIn ? "Michaelz" : "Guest")} />*/}

      <CounterRender
        render={(count, incrementCount) => (
          <ClickCounterRender count={count} incrementCount={incrementCount} />
        )}
      />

      <CounterRender
        render={(count, incrementCount) => (
          <HoverCounterRender count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;

//CounterRender.js
import React, { Component } from "react";

class CounterRender extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default CounterRender;

//User.js
import React, { Component } from "react";

class User extends Component {
  render() {
    return <div>{this.props.render(false)}</div>;
  }
}

export default User;

//HoverCounterRender.js
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

//ClickCounterRender.js
import React, { Component } from "react";

class ClickCounterRender extends Component {
  /*  state = {
      count: 0,
    };

    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    };*/
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}

export default ClickCounterRender;
