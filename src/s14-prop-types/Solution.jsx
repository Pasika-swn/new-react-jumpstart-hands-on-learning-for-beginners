// @ts-check
import React from "react";
import PropTypes from "prop-types";

const SelfIntroduction = ({ name = "Unknown", dateOfBirth, hobbies = [] }) => {
  return (
    <div>
      <h1>Hello, my name is {name}.</h1>
      {dateOfBirth ? <h2>I was born in {dateOfBirth}.</h2> : null}
      {hobbies.length > 0 ? (
        <h2>My hobbies are {hobbies.join(", ")}.</h2>
      ) : null}
    </div>
  );
};
SelfIntroduction.propTypes = {
  name: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string),
};

/**
 *
 * @type {React.FC<{ name: string; dateOfBirth?: string; hobbies?: Array<string> }>}
 */
const SelfIntroduction2 = ({ name = "Unknown", dateOfBirth, hobbies = [] }) => {
  return (
    <div>
      <h1>Hello, my name is {name}.</h1>
      {dateOfBirth ? <h2>I was born in {dateOfBirth}.</h2> : null}
      {hobbies.length > 0 ? (
        <h2>My hobbies are {hobbies.join(", ")}.</h2>
      ) : null}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <SelfIntroduction name="Jun" />
      <SelfIntroduction name="Jun" dateOfBirth="22 Apr 2023" />

      <SelfIntroduction2 name="Jun" />
      <SelfIntroduction2 name="Jun" dateOfBirth="22 Apr 2023" />
    </div>
  );
}

export default App;
