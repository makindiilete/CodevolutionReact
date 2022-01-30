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
import { PortalDemo } from "./components/PortalDemo";
import { Hero } from "./components/Error Boundary/Hero";
import ErrorBoundary from "./components/Error Boundary/ErrorBoundary";
// import ClickCounter from "./components/Higher Order Component/ClickCounter";
import HoverCounter from "./components/Higher Order Component/HoverCounter";
import ClickCounterRender from "./components/Render Props/ClickCounterRender";
import HoverCounterRender from "./components/Render Props/HoverCounterRender";
import User from "./components/Render Props/User";
import CounterRender from "./components/Render Props/CounterRender";
import ComponentC from "./components/Context/ComponentC";
import { UserProvider, UserConsumer } from "./components/Context/userContext";

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
      {/*<ForwardRefParentInput />*/}
      {/*<PortalDemo />*/}
      {/*  <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Jetli" />
      </ErrorBoundary>*/}
      {/*This component is inside a HOC so ds props will not go to d component directly but to d HOC*/}
      {/*<ClickCounter name="Michaelz" />*/}
      {/*<HoverCounter />*/}
      {/*    RENDER PROPS  */}
      {/*  <ClickCounterRender />
      <HoverCounterRender />
      <User render={(isLoggedIn) => (isLoggedIn ? "Michaelz" : "Guest")} />*/}

      {/* <CounterRender
        render={(count, incrementCount) => (
          <ClickCounterRender count={count} incrementCount={incrementCount} />
        )}
      />

      <CounterRender
        render={(count, incrementCount) => (
          <HoverCounterRender count={count} incrementCount={incrementCount} />
        )}
      />*/}
      {/*<UserProvider value="Michaelz">*/}
      <ComponentC />
      {/*</UserProvider>*/}
    </div>
  );
}

export default App;
