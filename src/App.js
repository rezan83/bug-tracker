import { useState, useEffect } from 'react';
import BugsList from './components/BugsList/BugsList';
import BugForm from './components/BugForm';


// import BugsPeriorityPie from './components/BugsPeriorityPie';
// import BugsSolvedPie from './components/BugsSolvedPie';
import { bugsData } from './bugsData';
//the Issues is going to load when we click on a btn , I made it here just to see the style
function App() {
  // const [solvedData, setSolvedData] = useState([]);
  // const [priorityData, setPriorityData] = useState([]);
  const [bugsDataSate, setBugsDataSate] = useState([]);
  useEffect(() => {
    setBugsDataSate(bugsData);
  }, []);

  // useEffect(() => {
  //   let solvedCount = bugsData.filter(bug => bug.solved).length;
  //   setSolvedData([bugsData.length - solvedCount, solvedCount]);
  //   setPriorityData(
  //     bugsData.reduce(
  //       (accu, next) => {
  //         accu[next.priority - 1] += 1;
  //         return accu;
  //       },
  //       [0, 0, 0]
  //     )
  //   );
  //   console.log(priorityData, solvedData)
  // }, [bugsData]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bug Tracker</h1>
      </header>
      <BugForm bugsDataSate={bugsDataSate} setBugsDataSate={setBugsDataSate}/>
      <BugsList bugsDataSate={bugsDataSate} setBugsDataSate={setBugsDataSate} />

      {/* <BugsPeriorityPie priorityData={priorityData} />
      <BugsSolvedPie solvedData={solvedData} /> */}
    </div>
  );
}

export default App;
