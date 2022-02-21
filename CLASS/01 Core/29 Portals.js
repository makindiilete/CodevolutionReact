/*
React Portal give us the ability to render an elements outside the default 'root' node tag inside where all the app elements are rendered.... (The root node that exist on index.html)...

When do u need Portals? When u need to deal with d parent css where d child is a pop up, modal or tool tip
*/

//index.html
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--    We add a new root outside d default root-->
    <div id="portal-root"></div>
  </body>
</html>

*/

//PortalDemo.js
import React from "react";
import ReactDOM from "react-dom";

export function PortalDemo(props) {
  //To render ds component inside d second root we created inside d index.html file, we use d createPortal() function passing in d tags we want to create (ds can be any element react can render even components) and d id of the root
  return ReactDOM.createPortal(
    <h1>Portal Demo</h1>,
    document.getElementById("portal-root")
  );
}
