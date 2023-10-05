function App() {
  return (
    <div className="App">
      {/* 1. HTML as JSX element */}
      <div />
      {/* ---------- */}
      {/* 2. JSX element with text */}
      <div>child</div>
      {/* ---------- */}
      {/* 3. JSX element with children */}
      <div>
        <p>Another child</p>
      </div>
      {/* ---------- */}
      {/* 4. JSX element with attributes */}
      <div role="article" id="foo" />
      {/* ---------- */}
    </div>
  );
}

export default App;
