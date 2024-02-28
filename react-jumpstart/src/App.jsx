// @ts-check
import PropTypes from "prop-types";
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
        type="date"
        id="dob"
        value={DOB}
        onChange={(event) => {
          setDOB(event.target.value);
        }}
      />

      <div>
        {hobbies.map((item, index) => (
          <div key={index}>
            <label htmlFor="hobby">Hobby{index + 1}: </label>
            <input
              id="hobby"
              value={item}
              onChange={(event) => {
                const newValue = event.target.value;
                // setHobbies(hobbies.map((hobby, hobbyIndex)=>{
                //   if(hobbyIndex===index){
                //     return newValue
                //   }else {
                //     return hobby
                //   }
                // }))
                
                //จำค่าเวลาเพิ่มรายละเอียดใน hobby ช่องต่างๆ
                const newHobbies = hobbies.map((hobby, hobbyIndex) =>
                  hobbyIndex === index ? newValue : hobby
                );

                console.log("+++",newHobbies);

                setHobbies(newHobbies);
              }}
            />
          </div>
        ))}
        <button
          onClick={() => {
            setHobbies([...hobbies, ""]);
          }}
        >
          Add another hobby
        </button>
      </div>

      <button
        onClick={() => {
          setData({ name, DOB });
          setDOB("");
          setName("");
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
