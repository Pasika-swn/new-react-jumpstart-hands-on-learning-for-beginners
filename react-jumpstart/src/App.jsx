// @ts-check
import PropTypes from "prop-types";
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import '@picocss/pico'
import "dayjs/locale/th";
import dayjs from "dayjs";
import bhuddishtEra from "dayjs/plugin/buddhistEra";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.locale("th");
dayjs.extend(localizedFormat);
dayjs.extend(bhuddishtEra);

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
      {DOB ? <h2>I was born in {dayjs(DOB).format("D MMM BBBB")}</h2> : null}
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

  const [hobbies, setHobbies] = useState([""]);

  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "160px 1fr 48px",
          gap: "0.5rem",
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}

          style={{gridColumn: 'span 2'}}
        />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={DOB}
          onChange={(event) => {
            setDOB(event.target.value);
          }}
          style={{gridColumn:"span 2"}}
        />

        {hobbies.map((item, index) => (
          <div key={index} style={{display:'contents'}}>
            <label htmlFor={`hobby-${index}`} style={{gridColumn:"1"}}>Hobby{index + 1}: </label>
            <input
              id={`hobby-${index}`}
              value={item}
              onChange={(event) => {
                //จำค่าเวลาเพิ่มรายละเอียดใน hobby ช่องต่างๆ
                //For each element (hobby) and its index (hobbyIndex) in the original hobbies array:
                // If the current element's index (hobbyIndex) matches the index of the edited input (index):
                // The newValue (the new value entered) is returned, replacing the existing value at that index in the new hobbies array.
                // If the current element's index doesn't match the edited input:
                // The original hobby value is simply returned, remaining unchanged in the new hobbies array.
                const newHobbies = hobbies.map((hobby, hobbyIndex) =>
                  hobbyIndex === index ? newValue : hobby
                );

                // console.log("+++", newHobbies);

                setHobbies(newHobbies);
              }}
            />
            <button
              onClick={() => {
                setHobbies(
                  hobbies.filter(
                    (del, delIndex) => delIndex != index //ถ้าไม่ใช่ index ที่เรากดลบ ให้เก็บเอาไว้(แสดง)
                  )
                );
              }}
              style={{backgroundColor:"red", width:"max-content"}}
            >
              Del
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            setHobbies([...hobbies, ""]);
          }}
          style={{gridColumn: "2", width:"max-content"}}
        >
          Add another hobby
        </button>

        <button
          onClick={() => {
            setData({ name, DOB });
            setDOB("");
            setName("");
          }}
          style={{gridColumn:"1 /span 3", backgroundColor:"limegreen"}}
        >
          Save
        </button>
      </div>

      <SelfIntroduction name={data.name} DOB={data.DOB} />
      <Test>123</Test>
    </div>
  );
}

export default App;
