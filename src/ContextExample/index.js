import Content from "./Content";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import { useContext } from "react";

import "../App.css";

function App() {
  const contextToggle = useContext(ThemeContext);
  return (
    <div className="App">
      <button onClick={contextToggle.toggleTheme}>Toggle Theme</button>
      <Content></Content>
    </div>
  );
}

export default App;
