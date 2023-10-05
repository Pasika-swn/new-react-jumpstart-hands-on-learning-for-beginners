// TODO: 1. Receive a prop called `hobbies` and render it as a list of hobbies (comma separated).
// TODO: 2. Wrap the list of hobbies with `My hobbies are: ` if it is provided.
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
      <SelfIntroduction
        name="Jun"
        dateOfBirth="22 Apr 2373"
        hobbies={["Playing games", "Watching movies", "Eat eat eat"]}
      />
    </div>
  );
}

export default App;
