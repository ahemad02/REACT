import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 10;

  const [counter, setCounter] = useState(10);

  const addValue = () => {
    setCounter((prevcount) => prevcount + 1);
    setCounter((prevcount) => prevcount + 1);
    setCounter((prevcount) => prevcount + 1);
    setCounter((prevcount) => prevcount + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React course {counter}</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add to value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>Footer:{counter}</p>
    </>
  );
}

export default App;
