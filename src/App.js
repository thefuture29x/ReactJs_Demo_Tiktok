import logo from "./logo.svg";
import "./App.css";

import { ThemeProvider } from "./ContextExample/ThemeContext";

import ContextAndUseReducerExmample from "./ContextAndUseReducer";

import Content from "./Content.js";
import UseStateExample from "./ListJobs.js";
import UseEffectExample01 from "./ShowButton.js";
import UseEffectExample02 from "./ScrollAndResize.js";
import UseEffectExample03 from "./Countdown.js";
import UseEffectExample04 from "./ChooseAvatar.js";
import UserRefExample from "./StopWatch.js";
import UserMemoExample from "./AddProduct.js";
import UserReducerExample01 from "./UpAndDown.js";
import UserReducerExample02 from "./ToDoApp.js";
import UserReducerExample03 from "./Todo";
import UserContextExample from "./ContextExample";
import UseImperativeHandle from "./UseImperativeHandle";

function App() {
  return (
    <div className="App">
      <UseImperativeHandle></UseImperativeHandle>
    </div>
  );
}

export default App;
