import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import BugsList from './components/BugsList/BugsList';
import BugForm from './components/BugForm';

import BugsPeriorityPie from './components/Charts/BugsPriorityPie';
import BugsSolvedPie from './components/Charts/BugsSolvedPie';
import BugsSolvedByAssigneeBar from './components/Charts/BugsSolvedByAssigneeBar';
import Charts from './components/Charts';
// uncomment useFetchAllBugs related and comment bugsData to test remot api
import { bugsData } from './bugsData';
import NavBar from './components/NavBar/NavBar';
import { usePopulateCharts } from './hooks/usePopulateCharts';
// uncomment useFetchAllBugs related and comment bugsData to test remot api
// import { useFetchAllBugs } from './hooks/useFetchAllBugs';
function App() {

  // uncomment useFetchAllBugs related and comment bugsData to test remot api
  const [bugsDataSate, setBugsDataSate] = useState([]);
  // uncomment useFetchAllBugs related and comment bugsData to test remot api
  useEffect(() => {
    setBugsDataSate(bugsData);
  }, []);

  // uncomment useFetchAllBugs related and comment bugsData to test remot api
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
        {/* // uncomment useFetchAllBugs related and comment bugsData to test remot api */}
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
    </div>
  );
}

export default App;
