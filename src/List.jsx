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
  return (
    <div className="container">
      <ul>
        {tasks.map((task) => (
          <li className="row">
            <div className="col">
              <span>{task.id}</span> - <span>{task.name}</span>
            </div>
            <div className="col">
              <button className="button add-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
