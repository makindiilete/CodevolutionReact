import React, { useEffect, useReducer, useState } from "react";

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
export function UseCounterReducerMultiple(props) {
  //   count = initState (line 3)
  // dispatch = function to use to dispatch an action using one of our action types ('increment', 'decrement', 'reset')
  const [count, dispatch] = useReducer(reducer, initState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initState);
  return (
    <>
      <p>Count One</p>
      <div>
        <p>Count = {count}</p>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>

      <br />
      <br />
      <p>Count Two</p>
      <div>
        <p>Count = {countTwo}</p>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </>
  );
}
