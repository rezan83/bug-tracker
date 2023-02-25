import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const BugsPriorityPie = ({ priorityData }) => {
  const { low, normal, critical } = priorityData;
  const data = {
    datasets: [
      {
        label: '# of Bugs',
        data: [low, normal, critical],
        backgroundColor: ['yellow', 'orange', 'purple'],
        // borderColor: ['grey', 'grey', 'grey'],
        borderWidth: 1,
        hoverOffset: 10
      }
    ],
    labels: ['Low', 'Normal', 'Critical']
  };
  return (
    <div className="chart-pie">
      <h2>Priority</h2>
      <Pie data={data} />
    </div>
  );
};
export default BugsPriorityPie;
