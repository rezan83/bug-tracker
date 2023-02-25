import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BugsSolvedByAssigneeBar({ solvedBy }) {
  console.log(Object.keys(solvedBy));
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 1
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Solved By Assignee'
      }
    }
  };

  const labels = Object.keys(solvedBy);

  const data = {
    labels,
    datasets: [
      // {
      //   label: 'Dataset 1',
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //   borderColor: 'rgb(255, 99, 132)',
      //   backgroundColor: 'rgba(255, 99, 132, 0.5)'
      // },
      {
        label: 'Solved Bugs',
        data: Object.values(solvedBy),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  };

  return (
    <div className="chart chart-hbar">
      <Bar options={options} data={data} />
    </div>
  );
}
