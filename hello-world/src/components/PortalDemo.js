import React from "react";
import ReactDOM from "react-dom";

export function PortalDemo(props) {
  //To render ds component inside d second root we created inside d index.html file, we use d createPortal() function passing in d tags we want to create (ds can be any element react can render even components) and d id of the root
  return ReactDOM.createPortal(
    <h1>Portal Demo</h1>,
    document.getElementById("portal-root")
  );
}
