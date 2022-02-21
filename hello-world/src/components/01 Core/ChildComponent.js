import React, { useEffect } from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={props.greetParent}>Greet Parent</button>
      {/*  Passing parameter to d parent method handler*/}
      <button onClick={() => props.greetParent("child")}>
        Greet Parent With Params
      </button>
    </div>
  );
};

export default ChildComponent;
