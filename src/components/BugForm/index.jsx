import React, { useState } from 'react';

const BugForm = ({ bugsDataSate, setBugsDataSate }) => {
  const [newBug, setNewBug] = useState({
    id: '0',
    title: '',
    description: '',
    priority: 1,
    solved: false
  });
  const handleAddBug = event => {
    event.preventDefault();
    const id = Math.random() + '';

    setBugsDataSate([newBug, ...bugsDataSate]);
    setNewBug({
      id,
      title: '',
      description: '',
      priority: 1,
      solved: false
    });
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setNewBug({ ...newBug, [name]: value });
  };

  return (
    <form onSubmit={handleAddBug}>
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
      <select id="priority" name="priority" value={newBug.priority} onChange={handleChange}>
        <option value="1">Low</option>
        <option value="2">Normal</option>
        <option value="3">Critical</option>
      </select>

      {/* <label htmlFor="solved">Solved</label>
        <input
          type="checkbox"
          id="solved"
          name="solved"
          checked={newBug.solved}
          onChange={handleSolvedChange}
        /> */}

      <button type="submit">Add Bug</button>
    </form>
  );
};

export default BugForm;
