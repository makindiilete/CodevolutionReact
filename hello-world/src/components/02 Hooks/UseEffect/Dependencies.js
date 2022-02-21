import React, { useEffect, useState } from "react";

export function Dependencies(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(
    () => {
      console.log(`useEffect - updating document title`);
      document.title = `You clicked ${count} times`;
    },
    // here we specify an array of values ds effect depends on & d effect will only run if any of d values changes
    [count]
  );
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}
