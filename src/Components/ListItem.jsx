import React from "react";
export function ListItem({ handleDelete, task }) {
  return (
    <li
      className={
        task.completed ? "complete row container" : "row container incomplete"
      }
      key={task.id}
    >
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
  );
}
