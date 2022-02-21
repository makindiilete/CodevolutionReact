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
