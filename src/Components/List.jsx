import { BoxCard } from "./BoxCard";
import { ListItem } from "./ListItem";
import React, { useState } from "react";

const List = ({ tasks, setTasks }) => {
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
      <h1>Task List</h1>
      {ShowText && (
        <ul>
          {tasks.map((task, index) => (
            <ListItem
              index={index}
              key={task.id}
              handleDelete={handleDelete}
              task={task}
            />
          ))}
        </ul>
      )}
      {/* <BoxCard style="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          commodi.
        </p>
      </BoxCard>
      <BoxCard style="alert">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          commodi.
        </p>
      </BoxCard>
      <BoxCard style="warning">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          commodi.
        </p>
      </BoxCard> */}
    </div>
  );
};

export default List;
