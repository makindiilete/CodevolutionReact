import React, { useEffect, useState } from "react";

let prvCount = 0;
export function UseStatePreviousState(props) {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementBy5 = () => {
    for (let i = 0; i < 5; i++) {
      // ds will increment our 'prvCount' var by 5 every time d fn is called so we sud av 5, 10, 15, 20 etc
      prvCount += 1;
      // however, ds will keep returning multiple of 1 i.e. 1,2,3,4,5 bcos when we increment count by 1 for d first time in d loop, and we are coming back again to increment it to 2, we are not keeping d value of d previous state
      // setCount(count + 1);

      // here we sud gt multiples of 5 bcos we are keeping d track of d prvState n using it to increment d next value
      setCount((prvCount) => prvCount + 1);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={incrementBy5}>Increment by 5</button>
    </div>
  );
}
