import React from "react";

import "./card.css";

function Card() {
  return (
    <div className="add-issue">
      <form>
        <label>
          Description
          <input type="text" placeholder="Description of Issue..." />
        </label>

        <label>
          Priority
          <select name="priority" id="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <button type="submit">Add</button>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default Card;
