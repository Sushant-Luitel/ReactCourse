import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((count) => count + 1);
  };
  const handleSub = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="App">
      <div className="container">
        <p>{count}</p>
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
        <button
          className="sub-button"
          onClick={handleSub}
          disabled={count === 0 ? true : false}
        >
          Subtract
        </button>
      </div>
    </div>
  );
}

export default App;
