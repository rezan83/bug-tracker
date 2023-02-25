import React from 'react';
import './charts.css';
const Charts = ({ children }) => {
  return (
    <div className="charts-container">
      <h2>Issues Tracking State</h2>
      <div className="charts">{children}</div>
    </div>
  );
};

export default Charts;
