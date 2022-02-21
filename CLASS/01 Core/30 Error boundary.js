/*
 */

//Hero.js
import React, { useEffect, useState } from "react";

export function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw Error("Not a hero");
  }
  return <div>{heroName}</div>;
}

//ErrorBoundary.js
import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    /*
        Error: Not a hero
        at Hero (Hero.js:5:1)
        at renderWithHooks (react-dom.development.js:14985:1)
        at mountIndeterminateComponent (react-dom.development.js:17811:1)
        at beginWork (react-dom.development.js:19049:1)
        at HTMLUnknownElement.callCallback (react-dom.development.js:3945:1)
        at Object.invokeGuardedCallbackDev (react-dom.development.js:3994:1)
        at invokeGuardedCallback (react-dom.development.js:4056:1)
        at beginWork$1 (react-dom.development.js:23964:1)
        at performUnitOfWork (react-dom.development.js:22776:1)
        at workLoopSync (react-dom.development.js:22707:1)
        at renderRootSync (react-dom.development.js:22670:1)
        at performSyncWorkOnRoot (react-dom.development.js:22293:1)
        at scheduleUpdateOnFiber (react-dom.development.js:21881:1)
        at updateContainer (react-dom.development.js:25482:1)
        at react-dom.development.js:26021:1
        at unbatchedUpdates (react-dom.development.js:22431:1)
        at legacyRenderSubtreeIntoContainer (react-dom.development.js:26020:1)
        at Object.render (react-dom.development.js:26103:1)
        at Module.<anonymous> (index.js:7:1)
        at Module../src/index.js (index.js:18:1)
        at __webpack_require__ (bootstrap:856:1)
        at fn (bootstrap:150:1)
        at Object.1 (reportWebVitals.js:14:1)
        at __webpack_require__ (bootstrap:856:1)
        at checkDeferredModules (bootstrap:45:1)
        at Array.webpackJsonpCallback [as push] (bootstrap:32:1)
        at main.chunk.js:1:75
        */
    console.log(errorInfo);
    /*componentStack: "\n    at Hero (http://localhost:3005/static/js/main.chunk.js:1348:5)\n    at ErrorBoundary (http://localhost:3005/static/js/main.chunk.js:1216:5)\n    at div\n    at App"*/
  }

  render() {
    return (
      <>
        {this.state.hasError ? (
          <h1>Something went wrong!</h1>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default ErrorBoundary;
