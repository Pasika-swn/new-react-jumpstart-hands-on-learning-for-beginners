// TODO: set default value for `name` prop to `Unknown`.
const SelfIntroduction = (props) => {
  // props is always an **immutable** object.
  const { name } = props;

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
