//css stylesheets
import React, { useEffect } from "react";
import "../assets/css/StyleSheet.css";

const StyleSheet = (props) => {
  // Applying css class conditionally
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className="primary">Stylesheet</h1>
      <h1 className={className}>Class Name Conditionally</h1>
      <h1 className={`${className} font-xl`}>Template Literal</h1>
    </div>
  );
};

export default StyleSheet;

//Stylesheet.css
/*
.primary{
	color: orange;
}

.font-xl{
	font-size: 72px;
}

*/

//inline styling
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

/*
CSS modules gives us the ability of a locally scoped css that solves css conflicts in our project
*/

//cssmodule.module.css
/*
.success{
	color: green;
}

*/

//CssModule.js
import React, { useEffect } from "react";
// importing regular css
import "./cssmodule.css";
//Importing css module
import styles from "./cssmodule.module.css";

const CssModule = (props) => {
  return (
    <div>
      {/*  Using classes defined inside the css module file */}
      <h1 className={styles.success}>CssModule</h1>
      <h1 className="error">Error</h1>
    </div>
  );
};

export default CssModule;
