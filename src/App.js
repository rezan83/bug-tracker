import { useState, useEffect } from 'react';
import BugsList from './components/BugsList/BugsList';
import BugForm from './components/BugForm';

import BugsPeriorityPie from './components/BugsPeriorityPie';
import BugsSolvedPie from './components/BugsSolvedPie';
import { bugsData } from './bugsData';
import { usePopulateCharts } from './hooks/usePopulateCharts';
import { useFetchAllBugs } from './hooks/useFetchAllBugs';
//the Issues is going to load when we click on a btn , I made it here just to see the style
function App() {
  // const [newBug, setNewBug] = useState({
  //   id: '0',
  //   title: '',
  //   description: '',
  //   priority: 1,
  //   solved: false
  // });

  // const [solvedData, setSolvedData] = useState([]);
  // const [priorityData, setPriorityData] = useState([]);
  const [bugsDataSate, setBugsDataSate] = useState([]);
  useEffect(() => {
    setBugsDataSate(bugsData);
  }, []);
  // const { fetchingState, setBugsDataSate, bugsDataSate } = useFetchAllBugs();
  // const {priorityData, solvedData} = usePopulateCharts(bugsDataSate)
  const handleGlobalChange = editedBug => {
    let oldBugIndex = bugsDataSate.findIndex(bug => bug.id === editedBug.id);
    let newBusData = [...bugsDataSate];
    newBusData.splice(oldBugIndex, 1, editedBug);
    setBugsDataSate(newBusData);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bug Tracker</h1>
      </header>
      {/* {fetchingState.isLoading && <h1>Loading </h1>}
      {fetchingState.isError && <h1>Error </h1>}
      {fetchingState.isReady && (
        <>
          <BugForm bugsDataSate={bugsDataSate} setBugsDataSate={setBugsDataSate} />
          <BugsList bugsDataSate={bugsDataSate} setBugsDataSate={setBugsDataSate} handleGlobalChange={handleGlobalChange} />{' '}
        </>
      )} */}

      {/* <div className="charts">
        <BugsPeriorityPie priorityData={priorityData} />
        <BugsSolvedPie solvedData={solvedData} />
      </div> */}

      <BugForm bugsDataSate={bugsDataSate} setBugsDataSate={setBugsDataSate} />
      <BugsList
        bugsDataSate={bugsDataSate}
        setBugsDataSate={setBugsDataSate}
        handleGlobalChange={handleGlobalChange}
      />
    </div>
  );
}

export default App;
