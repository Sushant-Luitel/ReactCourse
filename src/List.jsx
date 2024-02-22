import React, { useState } from "react";

const List = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Prepare E-governance Presentation",
      completed: false,
    },
    {
      id: 2,
      name: "Make .Net Notes",
      completed: false,
    },
    {
      id: 3,
      name: "Get Internship",
      completed: true,
    },
  ]);
  const [ShowText, setShowText] = useState(false);

  const handleDelete = (id) => {
    let newTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTask);
  };

  return (
    <div className="container">
      <button
        className="button reset-button"
        onClick={() => setShowText(!ShowText)}
      >
        {ShowText ? "Hide" : "Show"}
      </button>
      {ShowText && (
        <ul>
          {tasks.map((task) => (
            <li className="row container list-item" key={task.id}>
              <div className="col">
                <span>{task.id}</span> - <span>{task.name}</span>
              </div>
              <div className="col">
                <button
                  className="button add-button"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
