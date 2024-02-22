import React from "react";
import { useState } from "react";
export function Button() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((count) => count + 1);
  };
  const handleSub = () => {
    setCount((count) => count - 1);
  };
  return (
    <div className="container">
      <p>{count}</p>
      <p>Sushant Luitel</p>
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>
      <button className="sub-button" onClick={handleSub}>
        Subtract
      </button>

      <button className="button reset-button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
