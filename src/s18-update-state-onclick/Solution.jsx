import { useState } from "react";

const SelfIntroduction = ({ name = "Unknown", dateOfBirth, hobbies = [] }) => {
  return (
    <div>
      <h1>
        Hello, my name is <span style={{ color: "tomato" }}>{name}</span>.
      </h1>
      {dateOfBirth ? <h2>I was born in {dateOfBirth}.</h2> : null}
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
  const [data, setData] = useState({ name: undefined });
  const [name, setName] = useState("");
  return (
    <div className="App">
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button
        onClick={() => {
          setData({ name });
          setName("");
        }}
      >
        Save
      </button>
      <SelfIntroduction
        name={data.name}
        dateOfBirth="22 Apr 2373"
        hobbies={["Playing games", "Watching movies", "Eat eat eat"]}
      />
    </div>
  );
}

export default App;
