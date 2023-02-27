import React from 'react';
import Charts from '../components/Charts';
import BugsPriorityPie from '../components/Charts/BugsPriorityPie';
import BugsSolvedPie from '../components/Charts/BugsSolvedPie';
import BugsSolvedByAssigneeBar from '../components/Charts/BugsSolvedByAssigneeBar';

const Dashboard = ({ priorityData, solvedData, solvedBy }) => {
  return (
    <Charts>
      <BugsPriorityPie priorityData={priorityData} />
      <BugsSolvedPie solvedData={solvedData} />
      <BugsSolvedByAssigneeBar solvedBy={solvedBy} />
    </Charts>
  );
};

export default Dashboard;
