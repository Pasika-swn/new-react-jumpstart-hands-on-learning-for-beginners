import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// props is immutable obj
const SelfIntroduction = ({ name = 'unknown' }) => {
  return <h1>"My name is {name}."</h1>;
};

function App() {
  return (
    <div className="App">
      {/* ขึ้นด้วยตัวใหญ่ คิดว่าเป็น component เสมอ */}
      <SelfIntroduction name="Beam" />
      <SelfIntroduction name="" />

      <SelfIntroduction name={undefined} />
      <SelfIntroduction />
    </div>
  );
}

export default App;
