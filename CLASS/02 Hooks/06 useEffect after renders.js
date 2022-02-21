/*
This useEffect runs after the initial and after every renders that is after every dom updates
*/

import React, { useEffect, useState } from "react";

export function UseEffectAfterRender(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}
