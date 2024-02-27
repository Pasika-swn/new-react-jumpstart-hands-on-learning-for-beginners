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
    // we can return just only one jsx elem
    <div>
      <h1>"My name is {name}."</h1>;{/* conditional rendering => shorted-if */}
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
  return (
    <div className="App">
      <SelfIntroduction
        name= "BEAM"
      />

      <Test>123</Test>
    </div>
  );
}

export default App;

//[in terminal] yarn add prop-types -D
