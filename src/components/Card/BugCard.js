import React, { useState } from 'react';

import './bugcard.css';

function BugCard() {
  const [bugs, setBugs] = useState([]);
  const [newBug, setNewBug] = useState({
    id: "0",
    title: '',
    description: '',
    priority: 1,
    solved: false
  });
  const handleAddBug = () => {
    const id = Math.random() + '';
   
    setBugs([...bugs, newBug]);
    setNewBug({
      id,
      title: '',
      description: '',
      priority: 1,
      solved: false
    });
  };

  const handleDeleteBug = id => {
    // const newBugs = [...bugs];
    // newBugs.splice(index, 1);
    // setBugs(newBugs);
    setBugs(bugs.filter(bug => bug.id !== id));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setNewBug({ ...newBug, [name]: value });
  };

  const handlePriorityChange = event => {
    const { value } = event.target;
    setNewBug({ ...newBug, priority: Number(value) });
  };

  const handleSolvedChange = event => {
    const { checked } = event.target;
    setNewBug({ ...newBug, solved: checked });
  };

  const getBugTitleColor = priority => {
    if (priority === 1) {
      return 'orange';
    } else if (priority === 2) {
      return 'green';
    } else {
      return 'red';
    }
  };

  return (
    <div className="card">
      <h1>Bugs</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          handleAddBug();
        }}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={newBug.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={newBug.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          name="priority"
          value={newBug.priority}
          onChange={handlePriorityChange}>
          <option value="1">Low</option>
          <option value="2">Normal</option>
          <option value="3">Critical</option>
        </select>

        <label htmlFor="solved">Solved</label>
        <input
          type="checkbox"
          id="solved"
          name="solved"
          checked={newBug.solved}
          onChange={handleSolvedChange}
        />

        <button type="submit">Add Bug</button>
      </form>

      {bugs.map(bug => (
        <div className="bug" key={bug.id}>
          <h2 style={{ color: getBugTitleColor(bug.priority) }}>{bug.title}</h2>
          <p>{bug.description}</p>
          <p>Priority: {bug.priority}</p>
          <p>Solved: {bug.solved ? 'Yes' : 'No'}</p>
          <button onClick={() => handleDeleteBug(bug.id)}>Delete Bug</button>
        </div>
      ))}
    </div>
  );
}

export default BugCard;
