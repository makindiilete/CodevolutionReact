import React, { useEffect } from "react";
import "../../assets/css/StyleSheet.css";

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
