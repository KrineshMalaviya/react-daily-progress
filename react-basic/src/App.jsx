import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const componentUser = "React";

  return (
    <>
      {/* so this componentUser is final evolution expression so inside return {} write always evolution expression and write logic outside return statement */}
      <h1>Vite + React {componentUser}</h1>
    </>
  );
}

export default App;
