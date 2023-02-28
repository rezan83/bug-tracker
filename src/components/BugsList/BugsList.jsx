import React from 'react';
import BugCard from './BugCard';
import './bugslist.css';

function BugsList({ bugsDataState, handleGlobalChange, handleDeleteBug }) {
  return (
    <div className="card-container">
      {/* <h1>Bugs</h1> */}

      {bugsDataState.map(bug => {
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
