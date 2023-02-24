import React, { useState } from 'react';

function BugCard({ bug, handleDeleteBug }) {
  const [priority, setPriority] = useState(bug.priority);
  const [solved, setSolved] = useState(bug.solved);
  const toggleSolved = () => {
    setSolved(prev => !prev);
  };
  const getPeriorityName = bugPriority => {
    return ['low', 'normal', 'critical'][bugPriority - 1];
  };
  return (
    <div className="bug">
      <header className={`card-header bug-priority ${getPeriorityName(priority)}`}>
        <h2>{bug.title}</h2>
      </header>
      <p>{bug.description}</p>
      <p>Priority: {getPeriorityName(priority)}</p>
      <p onClick={toggleSolved}>Solved: {solved ? 'Yes' : 'No'}</p>
      <button onClick={() => handleDeleteBug(bug.id)}>Delete Bug</button>
    </div>
  );
}

export default BugCard;
