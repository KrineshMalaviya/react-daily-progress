import { useState } from "react";
import Bgchanger from "./components/Bgchanger";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  console.log(count);
  function addValue() {
    if (count < 5) {
      setCount((prevCounter) => prevCounter + 1);
      setCount((prevCounter) => prevCounter + 1);
      setCount((prevCounter) => prevCounter + 1);
      // setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1);
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
      <br></br>
      <Bgchanger />
    </>
  );
}

export default App;
