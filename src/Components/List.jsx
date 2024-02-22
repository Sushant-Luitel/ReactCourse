import { ListItem } from "./ListItem";
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
  const [ShowText, setShowText] = useState(true);

  const handleDelete = (id) => {
    let newTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTask);
  };

  return (
    <div className="container">
      <button
        className="button reset-button ${}"
        onClick={() => setShowText(!ShowText)}
      >
        Toggle
      </button>
      {ShowText && (
        <ul>
          {tasks.map((task) => (
            <ListItem handleDelete={handleDelete} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
