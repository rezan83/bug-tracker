import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const BugsPeriorityPie = ({ priorityData }) => {
  priorityData = priorityData || [10, 4, 6];
  const data = {
    labels: ['Low', 'Normal', 'Critical'],
    datasets: [
      {
        label: '# of Bugs',
        data: priorityData,
        backgroundColor: ['yellow', 'orange', 'purple'],
        borderColor: ['grey', 'grey', 'grey'],
        borderWidth: 1
      }
    ]
  };
  return <Pie data={data} />;
};
export default BugsPeriorityPie;
