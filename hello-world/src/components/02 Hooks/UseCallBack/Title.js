import React, { useEffect, useState } from "react";

function Title(props) {
  console.log("Rendering Title");
  return (
    <div>
      <h2>Use Call Back Hooks</h2>
    </div>
  );
}

export default React.memo(Title);
