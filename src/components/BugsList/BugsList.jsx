import React from 'react';
import BugCard from './BugCard';
import './bugslist.css';

function BugsList({ bugsDataSate, setBugsDataSate, handleGlobalChange, handleDeleteBug }) {
  

  return (
    <div className="card-container">
      {/* <h1>Bugs</h1> */}

      {bugsDataSate.map(bug => {
        return (
          <BugCard
            bug={bug}
            handleDeleteBug={handleDeleteBug}
            handleGlobalChange={handleGlobalChange}
            key={bug.id}
          />
        );
      })}
    </div>
  );
}

export default BugsList;
