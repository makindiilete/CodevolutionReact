import React, { useEffect, useState } from "react";

export function ComponentDidMount(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function logMouseMovement(e) {
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    /*on component mounts, we attach an event listener once and it listens to changes in mouse movement*/
    window.addEventListener("mousemove", logMouseMovement);
  }, []);
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}
