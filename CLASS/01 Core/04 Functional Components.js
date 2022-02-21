/*
This are javascript functions that accepts input of 'props' and return a jsx
*/
//Declaring functional components

//Method 1
import React from "react";

const Greet = (props) => {
  return <h1>Hello Michaelz</h1>;
};

export default Greet;

//Method 2 : - Since we are returning just a single line, we can use arrow functions
import React from "react";

const Greet = (props) => <h1>Hello Michaelz</h1>;

export default Greet;

//Default Export (export default Greet) : - This allows us to use any name we feel like to render the component where we want to use it just incase we do not want to use its defined name. Even though the functional component was named 'Greet', we imported it as 'MyComponent' and it still work

import React from "react";

const Greet = (props) => <h1>Hello Michaelz</h1>;

//    default export
export default Greet;

import "./App.css";
//Importing it using a different name
import MyComponent from "./components/Greet";

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;

//Named Export : - With this syntax

import React from "react";

//Named export
export const Greet = (props) => <h1>Hello Michaelz</h1>;

//Importing it
import "./App.css";
//we import it using object destructuring
import { Greet } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}

export default App;
