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
  // const [solvedData, setSolvedData] = useState([]);
  // const [priorityData, setPriorityData] = useState([]);
  const [bugsDataSate, setBugsDataSate] = useState([]);
  useEffect(() => {
    setBugsDataSate(bugsData);
  }, []);
  // const { fetchingState, setBugsDataSate, bugsDataSate } = useFetchAllBugs();
  // const {priorityData, solvedData} = usePopulateCharts(bugsDataSate)

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
          <BugsList bugsDataSate={bugsDataSate} setBugsDataSate={setBugsDataSate} />{' '}
        </>
      )} */}

      <BugForm bugsDataSate={bugsDataSate} setBugsDataSate={setBugsDataSate} />
      <BugsList bugsDataSate={bugsDataSate} setBugsDataSate={setBugsDataSate} />
      {/* <BugsPeriorityPie priorityData={priorityData} />
      <BugsSolvedPie solvedData={solvedData} /> */}
    </div>
  );
}

export default App;
