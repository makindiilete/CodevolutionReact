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
