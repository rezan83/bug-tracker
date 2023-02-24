import React from 'react';
import BugCard from './BugCard';

import './bugcard.css';

function BugsList({ bugsDataSate, setBugsDataSate }) {
  const handleDeleteBug = id => {
    // this is ok because you are copying the array
    // and splice is probably faster than filter
    // but index is a chanching thing so don't depend on it

    // const newBugs = [...bugs];
    // newBugs.splice(index, 1);
    // setBugs(newBugs);
    setBugsDataSate(bugsDataSate.filter(bug => bug.id !== id));
  };

  return (
    <div className="card">
      <h1>Bugs</h1>

      {bugsDataSate.map(bug => {
        return <BugCard bug={bug} handleDeleteBug={handleDeleteBug} key={bug.id} />;
      })}
    </div>
  );
}

export default BugsList;
