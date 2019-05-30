import React from "react";
import ReactDOM from "react-dom";

import RollDice from "./RollDice";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <RollDice />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
