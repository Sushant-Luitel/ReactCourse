import React from "react";
import "./ListItem.css";
export function ListItem({ handleDelete, task, index }) {
  return (
    <li
      className={
        task.completed ? "complete row container" : "row container incomplete"
      }
    >
      <div className="col">
        <span>{index + 1}</span> - <span>{task.name}</span>
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
