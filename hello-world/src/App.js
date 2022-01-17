import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding";
import ParentComponent from "./components/ParentComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import InlineStyling from "./components/InlineStyling";
import CssModule from "./components/CssModule";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import FragmentTable from "./components/FragmentTable";
import PureComp from "./components/PureComponent/PureComp";
import ParentComp from "./components/PureComponent/ParentComp";
import RefsDemo from "./components/Ref/RefsDemo";
import ParentRef from "./components/Ref/ParentRef";
import ForwardRefParentInput from "./components/Ref/ForwardRefParentInput";

function App() {
  return (
    <div className="App">
      {/*<Counter />*/}
      {/*<Greet name="Michaelz" heroName="Hero Mike" />*/}
      {/*<Welcome name="Michaelz" heroName="Hero Mike" />*/}
      {/*<FunctionClick />*/}
      {/*<ClassClick />*/}
      {/*<EventBinding />*/}
      {/*<ParentComponent />*/}
      {/*<ConditionalRendering />*/}
      {/*<NameList />*/}
      {/*<StyleSheet primary={false} />*/}
      {/*<InlineStyling />*/}
      {/*<CssModule />*/}
      {/*<Form />*/}
      {/*<LifeCycleA />*/}
      {/*<FragmentDemo />*/}
      {/*<FragmentTable />*/}
      {/*<ParentComp />*/}
      {/*<RefsDemo />*/}
      {/*<ParentRef />*/}
      <ForwardRefParentInput />
    </div>
  );
}

export default App;
