import { useState } from "react";

import "dayjs/locale/th";
import dayjs from "dayjs";
import bhuddhistEra from "dayjs/plugin/buddhistEra";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.locale("th");
dayjs.extend(localizedFormat);
dayjs.extend(bhuddhistEra);

const SelfIntroduction = ({ name = "Unknown", dateOfBirth, hobbies = [] }) => {
  return (
    <div>
      <h1>
        Hello, my name is <span style={{ color: "tomato" }}>{name}</span>.
      </h1>
      {dateOfBirth ? (
        <h2>I was born in {dayjs(dateOfBirth).format("D MMM BBBB")}.</h2>
      ) : null}
      {hobbies.length > 0 ? (
        <div>
          <h2>My hobbies are:</h2>
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

function App() {
  const [data, setData] = useState({
    name: undefined,
    dateOfBirth: undefined,
    hobbies: [],
  });
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [hobbies, setHobbies] = useState([""]);
  return (
    <div className="App">
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="date" // <<< https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="dob">Date of birth:</label>
      <input
        id="dob"
        value={dob}
        onChange={(event) => setDob(event.target.value)}
      />

      <div>
        {hobbies.map((item, index) => (
          <div key={index}>
            <label htmlFor={`hobby-${index}`}>Hobby {index + 1}: </label>
            <input
              id={`hobby-${index}`}
              value={item}
              onChange={(event) => {
                const newValue = event.target.value;
                const newHobbies = hobbies.map((hobby, hobbyIndex) => {
                  if (hobbyIndex === index) {
                    return newValue;
                  }
                  return hobby;
                });
                setHobbies(newHobbies);
              }}
            />
            <button
              onClick={() => {
                setHobbies(
                  hobbies.filter((hobby, hobbyIndex) => hobbyIndex !== index)
                );
              }}
            >
              -
            </button>
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
          setData({ name, dob: new Date(dob), hobbies });
          setName("");
          setDob("");
          setHobbies([""]);
        }}
      >
        Save
      </button>
      <SelfIntroduction
        name={data.name}
        dateOfBirth={data.dob}
        hobbies={data.hobbies}
      />
    </div>
  );
}

export default App;
