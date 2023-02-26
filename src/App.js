// uncomment useFetchAllBugs related and comment bugsData to test remot api
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import BugsList from './components/BugsList/BugsList';
import BugForm from './components/BugForm';
// import errorImage from './images/error.svg';
// import loadingImage from './images/loading.svg';

import BugsPeriorityPie from './components/Charts/BugsPriorityPie';
import BugsSolvedPie from './components/Charts/BugsSolvedPie';
import BugsSolvedByAssigneeBar from './components/Charts/BugsSolvedByAssigneeBar';
import Charts from './components/Charts';
import NavBar from './components/NavBar/NavBar';
import { usePopulateCharts } from './hooks/usePopulateCharts';
// uncomment useFetchAllBugs related and comment bugsData to test remot api
import { bugsData } from './bugsData';
// uncomment useFetchAllBugs related and comment bugsData to test remot api
// import { useFetchAllBugs } from './hooks/useFetchAllBugs';
import ScrollToTop from './components/ScrollToTop';
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
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        {/* // uncomment useFetchAllBugs related and comment bugsData to test remot api */}
        <Route
          path="/"
          element={
            <>
              {/* {
              fetchingState.isLoading && (
                <div className="loading">
                  <img src={loadingImage} alt="loading" />
                </div>
              )} */}
              {/* {fetchingState.isError && (
                <div className="loading fetch-error">
                  <h1>Sorry, please tray again later </h1> <img src={errorImage} alt="fetch data error" />
                </div>
              )} */}
              {/* {fetchingState.isReady && ( */}
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
      <ScrollToTop />
    </div>
  );
}

export default App;
