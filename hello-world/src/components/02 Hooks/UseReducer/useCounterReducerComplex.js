import React, { useEffect, useReducer, useState } from "react";

const initState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initState;
    default:
      return state;
  }
};
export function UseCounterReducerComplex(props) {
  //   count = initState (line 3)
  // dispatch = function to use to dispatch an action using one of our action types ('increment', 'decrement', 'reset')
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <p>1st Counter = {count.firstCounter}</p>
      <p>2nd Counter = {count.secondCounter}</p>
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment By 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement By 5
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment Second Counter
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement Second Counter
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}
