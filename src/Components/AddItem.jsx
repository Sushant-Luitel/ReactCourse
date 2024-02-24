import React, { useRef, useState } from "react";
import "./AddItem.css";
const AddItem = ({ tasks, setTasks }) => {
  const taskRef = useRef("");
  const [progress, setProgress] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 1000000),
      name: taskRef.current.value,
      completed: Boolean(progress),
    };
    console.log(task);
    setTasks([...tasks, task]);

    ResetValue();
  }

  const ResetValue = () => {
    taskRef.current.value = "";
    setProgress(false);
  };

  return (
    <section className="add-item container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input
          ref={taskRef}
          type="text"
          id="Name"
          name="Name"
          placeholder="Enter your name"
          autoComplete="off"
        />
        <select
          className="select-field"
          onChange={(e) => setProgress(e.target.value)}
          value={progress}
        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit" className="sub-button">
          Add Task
        </button>
        <span className="reset add-button" onClick={ResetValue}>
          Reset
        </span>
      </form>
    </section>
  );
};

export default AddItem;
