const SelfIntroduction = ({ name = "Unknown" }) => {
  return <h1>Hello, my name is {name}.</h1>;
};

// Option 2: destructuring in the function body. Both are equivalent.
// const SelfIntroduction = (props) => {
//   const { name = "Unknown" } = props;
//   return <h1>Hello, my name is {name}.</h1>;
// };

function App() {
  return (
    <div className="App">
      <SelfIntroduction name="Jun" />
    </div>
  );
}

export default App;
