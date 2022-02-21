import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        {/*ds returns = Component E context Omoakin */}
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}
//U can also use ds syntax

// ComponentE.contextType = UserContext;
export default ComponentE;
