/*
We can supply a default value to the context which will be used only when the component does not have a matching provider wrapping it above the component tree
*/

//userContext.js
import React from "react";
const UserContext = React.createContext("Omoakin");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

//App.js
//App.js
import ComponentC from "./components/Context/ComponentC";

function App() {
  return (
    <div className="App">
      {/*<UserProvider value="Michaelz">*/}
      <ComponentC />
      {/*</UserProvider>*/}
    </div>
  );
}

export default App;

/*
Instead of using consumer to get the context value, we can also use contextType which appears to be more cleaner and straightforward but with some limitation :
    1-  contextType doesnt allow you to subscribe/use multiple contexts in a component
*/

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
