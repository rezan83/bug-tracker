// uncomment useFetchAllBugs related and comment bugsData to test remot api
// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import BugsList from './components/BugsList/BugsList';
import BugForm from './components/BugForm';
import errorImage from './images/error.svg';
import loadingImage from './images/loading.svg';
import BugsPeriorityPie from './components/Charts/BugsPriorityPie';
import BugsSolvedPie from './components/Charts/BugsSolvedPie';
import BugsSolvedByAssigneeBar from './components/Charts/BugsSolvedByAssigneeBar';
import Charts from './components/Charts';
import NavBar from './components/Navigation/NavBar';
import ScrollToTop from './components/Navigation/ScrollToTop';

// uncomment useFetchAllBugs related and comment bugsData to test remot api
// import { bugsData } from './bugsData';
// uncomment useFetchAllBugs related and comment bugsData to test remot api
import { useFetchAllBugs } from './hooks/useFetchAllBugs';
import { useSearchState } from './hooks/useSearchState';
import { usePopulateCharts } from './hooks/usePopulateCharts';
function App() {
  // uncomment useFetchAllBugs related and comment bugsData to test remot api
  const { fetchingState, setBugsDataState, bugsDataState } = useFetchAllBugs();
  const { priorityData, solvedData, solvedBy } = usePopulateCharts(bugsDataState);
  const { searchGlobalQuery, setSearchGlobalQuery, bugsDataSearch, setBugsDataSearch } =
    useSearchState(bugsDataState);

  const handleGlobalChange = editedBug => {
    setBugsDataState(
      bugsDataState.map(bug => (bug.id === editedBug.id ? { ...bug, ...editedBug } : bug))
    );
    if (searchGlobalQuery) {
      setBugsDataSearch(
        bugsDataSearch.map(bug => (bug.id === editedBug.id ? { ...bug, ...editedBug } : bug))
      );
    }
  };
  const handleDeleteBug = id => {
    setBugsDataState(bugsDataState.filter(bug => bug.id !== id));
    if (searchGlobalQuery) {
      setBugsDataSearch(bugsDataSearch.filter(bug => bug.id !== id));
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <NavBar setSearchGlobalQuery={setSearchGlobalQuery} bugsDataSearch={bugsDataSearch} />
      </header>
      <Routes>
        {/* // uncomment useFetchAllBugs related and comment bugsData to test remot api */}
        <Route
          path="/"
          element={
            <>
              {fetchingState.isLoading && (
                <div className="loading">
                  <img src={loadingImage} alt="loading" />
                </div>
              )}
              {fetchingState.isError && (
                <div className="loading fetch-error">
                  <h1>Sorry, please tray again later </h1>{' '}
                  <img src={errorImage} alt="fetch data error" />
                </div>
              )}
              {fetchingState.isReady && (
                <Charts>
                  <BugsPeriorityPie priorityData={priorityData} />
                  <BugsSolvedPie solvedData={solvedData} />
                  <BugsSolvedByAssigneeBar solvedBy={solvedBy} />
                </Charts>
              )}
            </>
          }
        />
        <Route
          path="/report"
          element={
            <>
              <BugForm bugsDataState={bugsDataState} setBugsDataState={setBugsDataState} />
              <BugsList
                bugsDataState={bugsDataState}
                setBugsDataState={setBugsDataState}
                handleGlobalChange={handleGlobalChange}
                handleDeleteBug={handleDeleteBug}
              />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <h2 className="search-page-header">Search Results:</h2>
              <BugsList
                bugsDataState={searchGlobalQuery ? bugsDataSearch : bugsDataState}
                setBugsDataState={setBugsDataState}
                handleGlobalChange={handleGlobalChange}
                handleDeleteBug={handleDeleteBug}
              />
            </>
          }
        />
      </Routes>

      <ScrollToTop />
    </div>
  );
}

export default App;
