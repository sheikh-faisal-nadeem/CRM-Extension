import React from "react";
import render from "react-dom";

function Popup() {
  return (
    <div>
      <h1>Hello World</h1>
      <p1>Test Chrome Extension </p1>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
