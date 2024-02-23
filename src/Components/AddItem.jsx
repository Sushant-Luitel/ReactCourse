import React from "react";
import "./AddItem.css";
const AddItem = () => {
  return (
    <section className="add-item container">
      <form>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          name="Name"
          placeholder="Enter your name"
        />
        <button className="sub-button">Submit</button>
      </form>
    </section>
  );
};

export default AddItem;
