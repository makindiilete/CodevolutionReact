import React, { useEffect } from "react";

/*Inline styling in react is presented using a 'style' attribute that takes value of an object.. Inside the object, d css property name are represented in 'camel case' version of their original name and the value is usually a string*/

const heading = {
  fontSize: "72px",
  color: "blue",
};

const InlineStyling = (props) => {
  return (
    <div>
      <h1 style={heading}>InlineStyling</h1>
    </div>
  );
};

export default InlineStyling;
