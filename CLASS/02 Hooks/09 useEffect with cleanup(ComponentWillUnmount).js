//MouseContainer.js
import React, { useEffect, useState } from "react";
import { ComponentWillUnmount } from "./ComponentWillUnmount";

export function MouseContainer(props) {
  const [showDisplay, setShowDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDisplay(!showDisplay)}>
        Toggle Display
      </button>
      {showDisplay && <ComponentWillUnmount />}
    </div>
  );
}

/*
When our 'showDisplay' state is set to false and we try to move our mouse around, we get this error : -

index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    at ComponentWillUnmount (http://localhost:3000/static/js/main.chunk.js:438:75)

This is because while unmounting the 'ComponentWillUnmount.js' component, we did not remove our event listener so react was still listening to mouse event but then it does not have access to any state to update it to..
*/

//ComponentWillUnmount.js
import React, { useEffect, useState } from "react";

export function ComponentWillUnmount(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function logMouseMovement(e) {
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    /*on component mounts, we attach an event listener once, and it listens to changes in mouse movement*/
    window.addEventListener("mousemove", logMouseMovement);
  }, []);
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

/*
After cleaning up
*/

import React, { useEffect, useState } from "react";

export function ComponentWillUnmount(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function logMouseMovement(e) {
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    /*on component mounts, we attach an event listener once, and it listens to changes in mouse movement*/
    window.addEventListener("mousemove", logMouseMovement);
    // here we clean up our event listener
    return () => {
      console.log("Cleaning up");
      window.removeEventListener("mousemove", logMouseMovement);
    };
  }, []);
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}
