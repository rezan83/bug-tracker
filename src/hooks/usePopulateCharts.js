import { useEffect, useState } from 'react';
import { getPriorityName } from '../helpers';

export const usePopulateCharts = bugsData => {
  const initialChartsData = {
    priorityData: { low: 0, normal: 0, critical: 0 },
    solvedData: { notSolvedCount: 0, solvedCount: 0 },
    solvedBy: {}
  };
  const [chartsData, setChartsData] = useState(initialChartsData);
  useEffect(() => {
    let calcData = bugsData.reduce((accu, bug) => {
      if (!Object(accu.solvedBy).hasOwnProperty(bug.assignee)) {
        accu.solvedBy[bug.assignee] = { yes: 0, no: 0 };
      }
      if (!bug.solved) {
        accu.solvedBy[bug.assignee].no += 1;
      } else {
        accu.solvedBy[bug.assignee].yes += 1;
        accu.solvedData.solvedCount += 1;
      }

      // how many each periority
      accu.priorityData[getPriorityName(bug.priority)] += 1;
      return accu;
    }, initialChartsData);
    calcData.solvedData.notSolvedCount = bugsData.length - calcData.solvedData.solvedCount;
    setChartsData(calcData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bugsData]);

  return chartsData;
};
