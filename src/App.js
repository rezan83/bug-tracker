import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import BugsList from './components/BugsList/BugsList';
import BugForm from './components/BugForm';

import BugsPeriorityPie from './components/Charts/BugsPriorityPie';
import BugsSolvedPie from './components/Charts/BugsSolvedPie';
import BugsSolvedByAssigneeBar from './components/Charts/BugsSolvedByAssigneeBar';
import Charts from './components/Charts';
import { bugsData } from './bugsData';
import NavBar from './components/NavBar/NavBar';
import { usePopulateCharts } from './hooks/usePopulateCharts';
// import { useFetchAllBugs } from './hooks/useFetchAllBugs';
//the Issues is going to load when we click on a btn , I made it here just to see the style
function App() {
  const [bugsDataSate, setBugsDataSate] = useState([]);
  useEffect(() => {
    setBugsDataSate(bugsData);
  }, []);
  // const { fetchingState, setBugsDataSate, bugsDataSate } = useFetchAllBugs();
  const { priorityData, solvedData, solvedBy } = usePopulateCharts(bugsDataSate);
  const handleGlobalChange = editedBug => {
    let oldBugIndex = bugsDataSate.findIndex(bug => bug.id === editedBug.id);
    let newBusData = [...bugsDataSate];
    newBusData.splice(oldBugIndex, 1, editedBug);
    setBugsDataSate(newBusData);
  };
  return (
    <div className="App">
      {console.log(bugsDataSate)}
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* {fetchingState.isLoading && <h1>Loading </h1>}
              {fetchingState.isError && <h1>Error </h1>}
              {fetchingState.isReady && ( */}
              <Charts>
                <BugsPeriorityPie priorityData={priorityData} />
                <BugsSolvedPie solvedData={solvedData} />
                <BugsSolvedByAssigneeBar solvedBy={solvedBy} />
              </Charts>
              {/* )} */}
            </>
          }
        />
        <Route
          path="/report"
          element={
            <>
              <>
                <BugForm bugsDataSate={bugsDataSate} setBugsDataSate={setBugsDataSate} />
                <BugsList
                  bugsDataSate={bugsDataSate}
                  setBugsDataSate={setBugsDataSate}
                  handleGlobalChange={handleGlobalChange}
                />
              </>
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
