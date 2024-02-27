// @ts-check
import PropTypes from "prop-types";
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// js doc
/**
 *
 * @type {React.FC<{name:string}>}
 * @returns  {React.ReactNode}
 */

const SelfIntroduction = ({ name = "unknown", DOB, hobbies = [] }) => {
  return (
    <div>
      <h1>
        "My name is <span style={{ color: "lightgreen" }}>{name}</span>."
      </h1>
      {DOB ? <h2>I was born in {DOB}</h2> : null}
      {hobbies.length > 0 ? (
        <div>
          <h2>My hobbies are</h2>
          {hobbies.map((item, index) => (
            <div key={item}>
              {index + 1}. {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

SelfIntroduction.propTypes = {
  name: PropTypes.string.isRequired,
};

const Test = ({ children }) => {
  return <h3>{children}</h3>;
};

function App() {
  // declare state
  const [name, setName] = useState("");
 

  return (
    <div className="App">

      <label htmlFor="name">Name:</label>
      <input id="name" value={name} onChange={(event) => {
        setName(event.target.value)
      }} />
      <button>Save</button>


      <SelfIntroduction name="BEAM" />

      <Test>123</Test> 
    </div>
  );
}

export default App;

//[in terminal] yarn add prop-types -D
