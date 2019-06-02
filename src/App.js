import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Chick from "./components/Chick";
import Text from "./components/TextBox";

function App() {
  return (
    <div className="App">
      <Chick />
      <Text text="hello! I have just been hatched on your browser!" />
    </div>
  );
}

export default App;
