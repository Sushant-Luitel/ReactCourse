import React, { useState } from "react";
import "./AddItem.css";
const AddItem = () => {
  const [inputValue, setInputValue] = useState();
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const ResetValue = () => {
    setInputValue("");
  };

  return (
    <section className="add-item container">
      <form>
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
        <button className="sub-button">Add Task</button>
        <span className="reset add-button" onClick={ResetValue}>
          Reset
        </span>
        <h1>Name= {inputValue}</h1>
      </form>
    </section>
  );
};

export default AddItem;
