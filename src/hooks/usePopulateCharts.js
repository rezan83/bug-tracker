import { useEffect, useState } from 'react';
import { getPriorityName } from '../helpers';

export const usePopulateCharts = bugsData => {
  // the shape of data consumed by charts
  const initialChartsData = {
    priorityData: { low: 0, normal: 0, critical: 0 },
    solvedCount: { notSolvedCount: 0, isSolvedCount: 0 },
    solvedBy: {}
  };
  const [chartsData, setChartsData] = useState(initialChartsData);

  // responsible of sorting data for the charts
  useEffect(() => {
    let calcData = bugsData.reduce((accu, bug) => {
      // give each assignee an empty object to start with``
      if (!Object(accu.solvedBy).hasOwnProperty(bug.assignee)) {
        accu.solvedBy[bug.assignee] = { yes: 0, no: 0 };
      }
      if (!bug.solved) {
        accu.solvedBy[bug.assignee].no += 1;
      } else {
        accu.solvedBy[bug.assignee].yes += 1;
        accu.solvedCount.isSolvedCount += 1;
      }

      // how many bug of each priority
      accu.priorityData[getPriorityName(bug.priority)] += 1;
      return accu;
    }, initialChartsData);
    calcData.solvedCount.notSolvedCount = bugsData.length - calcData.solvedCount.isSolvedCount;
    // finnaly setting data for charts``
    setChartsData(calcData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bugsData]);

  return chartsData;
};
