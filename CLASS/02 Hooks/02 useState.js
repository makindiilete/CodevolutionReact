//UseState.js
import React, { useEffect, useState } from "react";

const UseState = (props) => {
  /*
      useState() = a function dt returns 2 values : current state value, a function to update dt state value so we destructure this 2 values with array destructuring
      */
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count} </button>
    </div>
  );
};

export default UseState;
