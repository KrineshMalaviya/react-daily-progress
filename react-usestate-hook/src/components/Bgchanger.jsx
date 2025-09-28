import React from "react";
import { useState } from "react";

const Bgchanger = () => {
  const [color, setColor] = useState("black");
  return (
    <>
      <div style={{ backgroundColor: color, height: "50vh" }}>
        <div style={{ backgroundColor: "white", paddingTop: "20px" }}>
          <button
            onClick={() => {
              setColor("red");
            }}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("olive");
            }}
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </>
  );
};

export default Bgchanger;
