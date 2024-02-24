import React, { useState } from "react";
import "./AddItem.css";
const AddItem = () => {
  const [inputValue, setInputValue] = useState("");
  const [progress, setProgress] = useState(false);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 1000000),
      name: inputValue,
      completed: Boolean(progress),
    };
    console.log(task);
    ResetValue();
  }

  const ResetValue = () => {
    setInputValue("");
    setProgress(false);
  };

  return (
    <section className="add-item container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          id="Name"
          name="Name"
          placeholder="Enter your name"
          autoComplete="off"
        />
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit" className="sub-button">
          Add Task
        </button>
        <span className="reset add-button" onClick={ResetValue}>
          Reset
        </span>
        <h1>Name= {inputValue}</h1>
      </form>
    </section>
  );
};

export default AddItem;
