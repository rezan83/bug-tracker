import { useEffect, useState } from 'react';
import { getPeriorityName } from '../helpers';

export const usePopulateCharts = bugsData => {
  const initialChartsData = {
    priorityData: { low: 0, normal: 0, critical: 0 },
    solvedData: { notSolvedCount: 0, solvedCount: 0 },
    solvedBy: {}
  };
  const [chartsData, setChartsData] = useState(initialChartsData);
  useEffect(() => {
    let calcData = bugsData.reduce((accu, bug) => {
      if (bug.solved) {
        accu.solvedData.solvedCount += 1;
        if (Object(accu.solvedBy).hasOwnProperty(bug.assignee)) {
          accu.solvedBy[bug.assignee] += 1;
        } else {
          accu.solvedBy[bug.assignee] = 1;
        }
      }
      accu.priorityData[getPeriorityName(bug.priority)] += 1;
      return accu;
    }, initialChartsData);
    calcData.solvedData.notSolvedCount = bugsData.length - calcData.solvedData.solvedCount;
    setChartsData(calcData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bugsData]);

  return chartsData;
};
