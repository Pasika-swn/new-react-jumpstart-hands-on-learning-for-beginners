import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import S05Challenge from "./s05-basic-jsx/Challenge";
import S05Solution from "./s05-basic-jsx/Solution";
import S06Challenge from "./s06-component-jsx/Challenge";
import S06Solution from "./s06-component-jsx/Solution";
import S07Challenge from "./s07-self-introduction/Challenge";
import S07Solution from "./s07-self-introduction/Solution";
import S08Challenge from "./s08-default-parameters/Challenge";
import S08Solution from "./s08-default-parameters/Solution";
import S09Challenge from "./s09-conditional-rendering/Challenge";
import S09Solution from "./s09-conditional-rendering/Solution";

function App() {
  // to switch between the challenge and the solution, change the line below:
  return <S05Challenge />;
}

export default App;
