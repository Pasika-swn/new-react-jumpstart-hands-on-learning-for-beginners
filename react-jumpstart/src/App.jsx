import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// props is immutable obj
const SelfIntroduction = ({ name = "unknown", DOB, hobbies=[] }) => {
  return (
    // we can return just only one jsx elem
    <div>
      <h1>"My name is {name}."</h1>;{/* conditional rendering => shorted-if */}
      {DOB ? <h2>I was born in {DOB}</h2> : null}
      {hobbies.length > 0 ? <h2>My hobbies are "{hobbies.join(", ")}"</h2> : null}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* ขึ้นด้วยตัวใหญ่ คิดว่าเป็น component เสมอ */}
      <SelfIntroduction
        name="Beam"
        DOB="22/9/37"

        // dont wanna render hobbies
        // hobbies={["playing game", "watching movies", "Eat"]}
      />
    </div>
  );
}

export default App;
