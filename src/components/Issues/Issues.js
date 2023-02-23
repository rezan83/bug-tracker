import React from "react";

import './issues.css'
function Issues() {
  return (
    // make this dynamic - todo-
    <div className="current-issues">
      <div className="indv-issue"></div>
      <div className="indv-issue">
        <p className="close-issue">Close Isssue</p>
        <p>
          Priority <span>High</span>
        </p>
        <p>Description</p>
        <p className="description-text">description</p>
        <hr />
      </div>
    </div>
  );
}

export default Issues;
