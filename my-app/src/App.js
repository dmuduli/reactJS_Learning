import "./App.css";
import React, { useState } from "react";

function App() {
  const [highlighted, setHighlighted] = useState(false);

  const toggleStyleHandler = () => {
    setHighlighted((isHighlighted) => !isHighlighted);
  };
  return (
    <div className="App">
      <h1>Styled Components</h1>
      {/* <p style={{ color: highlighted ? "red" : "black" }}>Style me</p> */}
      <p className={`${highlighted ? "invalid" : ""}`}>Style me</p>
      <button onClick={toggleStyleHandler}>Toggle Style</button>
    </div>
  );
}

export default App;
