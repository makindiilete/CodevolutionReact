//App.js
import ComponentC from "./components/Context/ComponentC";
import { UserProvider, UserConsumer } from "./components/Context/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Michaelz">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;

//userContext.js
import React from "react";
const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

//ComponentC.js
import React, { Component } from "react";
import ComponentE from "./ComponentE";

class ComponentC extends Component {
  render() {
    return <ComponentE />;
  }
}

export default ComponentC;

//ComponentE.js
import React, { Component } from "react";
import ComponentF from "./ComponentF";

class ComponentE extends Component {
  render() {
    return <ComponentF />;
  }
}

export default ComponentE;

//ComponentF.js
import React, { Component } from "react";
import { UserConsumer } from "../Context/userContext";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hello {username} </div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
