import React from "react";
import ReactDOM from "react-dom";

const rootEl = document.getElementById("root");

const App = () => {
  return (
    <React.Fragment>
      <h1>こんにちは</h1>
      <p>おげんきですか？</p>
    </React.Fragment>
  );
};

ReactDOM.createRoot(rootEl).render(<App />);
