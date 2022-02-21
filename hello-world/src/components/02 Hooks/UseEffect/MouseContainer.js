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
