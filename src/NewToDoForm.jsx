import { useState } from "react";


// using destructuring to use onSubmit instead of props.onSubmit
export function NewToDoForm({onSubmit}) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    // to prevent that the pages refresh
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">What do you have to do?</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
