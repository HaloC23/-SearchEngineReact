import React from "react";
import ReactDOM from "react-dom";
import SearchEng from "./SearchEng";

import "./Style.css";

function App() {
  return (
    <div>
      <h1> Weather App </h1>
      <div className="App">
        <SearchEng />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
