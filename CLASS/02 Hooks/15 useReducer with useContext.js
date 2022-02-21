/*
Combining useReducer with useContext allows us manage global management state by setting up our useReducer inside App.js and then passing d state and dispatch to any component that needs it via useContext
*/

//App.js
import "./App.css";
import React, { useReducer } from "react";
import { UseReducerWithUseContext } from "./components/02 Hooks/UseReducer/useReducerWithUseContext";

export const CountContext = React.createContext();

const initState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <CountContext.Provider value={{ count, dispatch }}>
        <UseReducerWithUseContext />
      </CountContext.Provider>
    </div>
  );
}

export default App;

//UseReducerWithUseContext.js
import React, { useContext, useEffect, useReducer, useState } from "react";
import { CountContext } from "../../../App";
export function UseReducerWithUseContext() {
  const { count, dispatch } = useContext(CountContext);
  return (
    <div>
      <p>Count = {count}</p>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}
