import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const BubSolvedPie = ({ solvedData }) => {
  const data = {
    labels: ['Opened', 'Solved'],
    datasets: [
      {
        label: '# of Bugs',
        data: [solvedData.notSolvedCount, solvedData.solvedCount],
        backgroundColor: ['red', 'green'],
        // borderColor: ['grey', 'grey'],
        borderWidth: 1,
        hoverOffset: 10
      }
    ]
  };
  return (
    <div className="chart-pie">
      <h2>Solved</h2>
      <Pie data={data} />
    </div>
  );
};
export default BubSolvedPie;
