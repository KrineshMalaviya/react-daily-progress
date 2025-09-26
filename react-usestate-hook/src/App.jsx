import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  console.log(count);
  function addValue() {
    if (count < 5) {
      setCount(count + 1);
    }
  }
  // let counter = 15;
  return (
    <>
      <h1>Counter Project:</h1>
      <h2>{count}</h2>
      <button onClick={addValue}>+</button>
      <br></br>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
