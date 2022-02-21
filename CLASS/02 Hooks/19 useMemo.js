/*
With useMemo(), instead of re-rendering all the functions inside a component everytime the states changes, we can tell the component not to re-render a specific function if the state that changes does not have anything to do with the function
*/

import React, { useEffect, useMemo, useState } from "react";

export function UseMemo(props) {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  /*using isMemo here, d value of isEven will only be re-calculated when the value of counterOne changes... a cache version will b used for other state changes dt is not counterOne*/
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  /*  function isEven() {
      let i = 0;
      while (i < 200000000) i++;
      return counterOne % 2 === 0;
    }*/

  return (
    <div>
      <div>
        <button onClick={() => incrementOne()}>Count One - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <br />
      <div>
        <button onClick={() => incrementTwo()}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}
