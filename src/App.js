import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import BugsList from './components/BugsList/BugsList';
import BugForm from './components/BugForm';

import BugsPeriorityPie from './components/BugsPriorityPie';
import BugsSolvedPie from './components/BugsSolvedPie';
import Charts from './components/Charts';
import { bugsData } from './bugsData';
import NavBar from './components/NavBar/NavBar';
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
  const { priorityData, solvedData } = usePopulateCharts(bugsDataSate);
  const handleGlobalChange = editedBug => {
    let oldBugIndex = bugsDataSate.findIndex(bug => bug.id === editedBug.id);
    let newBusData = [...bugsDataSate];
    newBusData.splice(oldBugIndex, 1, editedBug);
    setBugsDataSate(newBusData);
  };
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Charts>
              <BugsPeriorityPie priorityData={priorityData} />
              <BugsSolvedPie solvedData={solvedData} />
            </Charts>
          }
        />
        <Route
          path="/report"
          element={
            <>
              <BugForm bugsDataSate={bugsDataSate} setBugsDataSate={setBugsDataSate} />
              <BugsList
                bugsDataSate={bugsDataSate}
                setBugsDataSate={setBugsDataSate}
                handleGlobalChange={handleGlobalChange}
              />
            </>
          }
        />
      </Routes>
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
    </div>
  );
}

export default App;
