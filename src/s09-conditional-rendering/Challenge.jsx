// TODO: 1. receive a prop called `dateOfBirth` with no default value.
// TODO: 2. render the date of birth (with prefix) only if it is provided.
const SelfIntroduction = ({ name = "Unknown" }) => {
  return <h1>Hello, my name is {name}.</h1>;
};

function App() {
  return (
    <div className="App">
      <SelfIntroduction name="Jun" />
    </div>
  );
}

export default App;
