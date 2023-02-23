import {useState, useEffect} from "react"
import BugCard from './components/Card/BugCard';

import BugsPeriorityPie from './components/BugsPeriorityPie';
import BugsSolvedPie from './components/BugsSolvedPie';
import {bugsData} from "./bugsData"
//the Issues is going to load when we click on a btn , I made it here just to see the style
function App() {
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
    console.log(priorityData, solvedData)
  }, []);


  return (
    <div className="App">
      <header className="App-header">
       <h1>Bug Tracker</h1>
      </header>
      <BugCard />
     
      <BugsPeriorityPie priorityData={priorityData} />
      <BugsSolvedPie solvedData={solvedData} />
    </div>
  );
}

export default App;
