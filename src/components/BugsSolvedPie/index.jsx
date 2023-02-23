import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const BubSolvedPie = ({ solvedData }) => {
  solvedData = solvedData || [12, 8];
  const data = {
    labels: ['Opened', 'Solved'],
    datasets: [
      {
        label: '# of Bugs',
        data: solvedData,
        backgroundColor: ['purple', 'green'],
        borderColor: ['grey', 'grey'],
        borderWidth: 1
      }
    ]
  };
  return <Pie data={data} />;
};
export default BubSolvedPie;
