import { useEffect, useState } from 'react';

export const usePopulateCharts = bugsData => {
  const [solvedData, setSolvedData] = useState([]);
  const [priorityData, setPriorityData] = useState([]);
  useEffect(() => {
    let solvedCount = bugsData.filter(bug => bug.solved).length;
    setSolvedData([bugsData.length - solvedCount, solvedCount]);
    setPriorityData(
      bugsData.reduce(
        (accu, next) => {
          accu[next.priority - 1] += 1;
          return accu;
        },
        [0, 0, 0]
      )
    );
  }, [bugsData]);

  return { solvedData, priorityData };
};
