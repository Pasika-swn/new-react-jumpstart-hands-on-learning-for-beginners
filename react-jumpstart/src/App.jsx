import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// props is immutable obj
const SelfIntroduction = (props) => {
  return <h1>"My name is {props.name}."</h1>;
};

function App() {
  return (
    <div className="App">
      {/* ขึ้นด้วยตัวใหญ่ คิดว่าเป็น component เสมอ */}
      <SelfIntroduction name="Beam" />
    </div>
  );
}

export default App;
