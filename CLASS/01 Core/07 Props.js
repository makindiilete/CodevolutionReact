/*
Props are immutable : - Props are read only, you cannot change their values from inside the component where they are being consumed
*/

// Using props in functional component

//App.js
import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet name="Michael" heroName="Bruce Lee">
        {/*  D props passed here btw the closing and opening tag of ds Greet component will be accessed using props.children*/}
        <p>Hello Michael</p>
      </Greet>
      <Greet name="Debby" heroName="Jackie">
        <button>Action</button>
      </Greet>
      <Greet name="Omoakin" heroName="Vandan" />
      {/*<Welcome />*/}
    </div>
  );
}

export default App;

//Greet.js
import React from "react";

export const Greet = (props) => {
  // ds will return an error
  props.name = "Mayor";
  return (
    <>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {/*  With props.children, we can access the content passed btw the opening and closing tag of this component*/}
      {props.children}
    </>
  );
};

//Using props in class component
import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      {/*  FUNCTIONAL COMPONENT */}
      <Greet name="Michael" heroName="Bruce Lee">
        {/*  D props passed here btw the closing and opening tag of ds Greet component will be accessed using props.children*/}
        <p>Hello Michael</p>
      </Greet>
      <Greet name="Debby" heroName="Jackie">
        <button>Action</button>
      </Greet>
      <Greet name="Omoakin" heroName="Vandan" />
      {/*  CLASS COMPONENT*/}
      <Welcome name="Michael" heroName="Bruce Lee" />
      <Welcome name="Debby" heroName="Jackie" />
      <Welcome name="Omoakin" heroName="Vandan" />
    </div>
  );
}

export default App;

//Welcome.js
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;
