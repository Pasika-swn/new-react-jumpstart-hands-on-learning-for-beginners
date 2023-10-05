const SelfIntroduction = ({ name = "Unknown", dateOfBirth }) => {
  return (
    <div>
      <h1>Hello, my name is {name}.</h1>
      {dateOfBirth ? <h2>I was born in {dateOfBirth}.</h2> : null}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <SelfIntroduction name="Jun" />
      <SelfIntroduction name="Jun" dateOfBirth="22 Apr 2023" />
    </div>
  );
}

export default App;
