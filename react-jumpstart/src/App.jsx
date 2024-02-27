// @ts-check
import PropTypes from "prop-types";
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// js doc
/**
 *
 * @type {React.FC<{name:string ,DOB:string}>}
 * @returns  {React.ReactNode}
 */

const SelfIntroduction = ({ name = "unknown", DOB, hobbies = [] }) => {
  return (
    <div>
      <h1>
        "My name is <span style={{ color: "orange" }}>{name}</span>."
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
  const [data, setData] = useState({ name: undefined, DOB: undefined });

  const [DOB, setDOB] = useState("");

  return (
    <div className="App">
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      
        <label htmlFor="dob">DOB:</label>
        <input
          id="dob"
          value={DOB}
          onChange={(event) => {
            setDOB(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setData({name, DOB})
            setDOB("");
            setName("")
          }}
        >
          Save
        </button>
      

      <SelfIntroduction name={data.name} DOB={data.DOB} />
      <Test>123</Test>
    </div>
  );
}

export default App;
