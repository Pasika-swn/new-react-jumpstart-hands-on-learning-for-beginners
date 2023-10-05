const Test = ({ children }) => {
  return <div>{children}</div>;
};

const CharacterCount = ({ children }) => {
  if (typeof children !== "string") {
    return children;
  }
  return `${children} (${children.length} chars)`;
};

function App() {
  return (
    <div className="App">
      <CharacterCount>A text message.</CharacterCount>
      <CharacterCount>
        <h1>Hello, my name is {name}.</h1>
      </CharacterCount>
      <Test>ABC</Test>
    </div>
  );
}

export default App;
