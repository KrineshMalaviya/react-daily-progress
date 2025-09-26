import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function MyApp() {
  return (
    <>
      <h1>React | Krinesh</h1>
    </>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Visit me",
// };

const finalUser = "Krinesh";
const anotherElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me",
  finalUser
);

createRoot(document.getElementById("root")).render(anotherElement);
