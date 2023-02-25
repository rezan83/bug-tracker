import React from 'react';
import "./bugcard.css"
function BugCard({ bug, handleDeleteBug, handleGlobalChange }) {
  const toggleSolved = () => {
    handleGlobalChange({ ...bug, solved: !bug.solved });
  };
  // in a function and spesefic class so we might use it in other places
  const getPeriorityName = bugPriority => {
    return ['low', 'normal', 'critical'][bugPriority - 1];
  };
  const handleLocalChange = event => {
    handleGlobalChange({ ...bug, [event.target.name]: Number(event.target.value) });
  };
  return (
    <div   className={`bug ${bug.solved ? 'solved' : ''}`}>
      <header className={`card-header bug-priority ${getPeriorityName(bug.priority)}`}>
        <h2>{bug.title}</h2>
      </header>
      <p>{bug.description}</p>
      <div className="submit__button">
      <label htmlFor="priority">Priority:</label>
      <select id="priority" name="priority" value={bug.priority} onChange={handleLocalChange}>
        <option value="1">Low</option>
        <option value="2">Normal</option>
        <option value="3">Critical</option>
      </select>
      <button id="btn__solved" className={`btn ${bug.solved ? 'solved' : ''}`} onClick={toggleSolved}>
        Solved:{bug.solved ? <span>&#128504;</span> : <span>&#10005;</span>}
      </button>
      <button onClick={() => handleDeleteBug(bug.id)}>Delete Bug</button>
      </div>
    </div>
  );
}

export default BugCard;
