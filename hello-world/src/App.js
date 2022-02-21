import "./App.css";
import React, { useReducer } from "react";
import { UseReducerWithUseContext } from "./components/02 Hooks/UseReducer/useReducerWithUseContext";
import { UseReducerFetchingData } from "./components/02 Hooks/UseReducer/useReducerFetchingData";
import { ParentComponent } from "./components/02 Hooks/UseCallBack/ParentComponent";
import { UseMemo } from "./components/02 Hooks/UseMemo/UseMemo";

export const CountContext = React.createContext();

const initState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <CountContext.Provider value={{ count, dispatch }}>
        <br />
        <br />
        {/*<UseReducerFetchingData />*/}
        {/*<ParentComponent />*/}
        <UseMemo />
      </CountContext.Provider>
    </div>
  );
}

export default App;
