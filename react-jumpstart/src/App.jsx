import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// props is immutable obj
const SelfIntroduction = ({ name = "unknown", DOB }) => {
  return (
    // we can return just only one jsx elem
    <div>
      <h1>"My name is {name}."</h1>;

      {/* conditional rendering => shorted-if */}
      {DOB ? <h2>I was born in {DOB}</h2> : null}
      
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* ขึ้นด้วยตัวใหญ่ คิดว่าเป็น component เสมอ */}
      <SelfIntroduction name="Beam" DOB="22/9/37" />
      <SelfIntroduction name="" />

      <SelfIntroduction name={undefined} />
      <SelfIntroduction />
    </div>
  );
}

export default App;
