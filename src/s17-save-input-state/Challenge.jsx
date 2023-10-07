// TODO:  Create an input that receives a value and save to state "name"

const SelfIntroduction = ({ name = "Unknown", dateOfBirth, hobbies = [] }) => {
  return (
    <div>
      <h1>
        Hello, my name is <span style={{ color: "tomato" }}>{name}</span>.
      </h1>
      {dateOfBirth ? <h2>I was born in {dateOfBirth}.</h2> : null}
      {hobbies.length > 0 ? (
        <div>
          <h2>My hobbies are:</h2>
          {hobbies.map((item, index) => (
            <div key={item}>
              {index + 1}. {item}
            </div>
          ))}
        </div>
      ) : null}
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
