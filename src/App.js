// uncomment useFetchAllBugs related and comment bugsData to test remot api
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import BugsList from './components/BugsList/BugsList';
import BugForm from './components/BugForm';
import errorImage from './images/error.svg';
import loadingImage from './images/loading.svg';

import BugsPeriorityPie from './components/Charts/BugsPriorityPie';
import BugsSolvedPie from './components/Charts/BugsSolvedPie';
import BugsSolvedByAssigneeBar from './components/Charts/BugsSolvedByAssigneeBar';
import Charts from './components/Charts';
import NavBar from './components/NavBar/NavBar';
import { usePopulateCharts } from './hooks/usePopulateCharts';
// uncomment useFetchAllBugs related and comment bugsData to test remot api
// import { bugsData } from './bugsData';
// uncomment useFetchAllBugs related and comment bugsData to test remot api
import { useFetchAllBugs } from './hooks/useFetchAllBugs';
import ScrollToTop from './components/ScrollToTop';
function App() {
  const [searchGlobalQuery, setSearchGlobalQuery] = useState('');
  // uncomment useFetchAllBugs related and comment bugsData to test remot api
  // const [bugsDataSate, setBugsDataSate] = useState([]);
  const [bugsDataSearch, setBugsDataSearch] = useState([]);
  // uncomment useFetchAllBugs related and comment bugsData to test remot api
  useEffect(() => {
    if (searchGlobalQuery) {
      setBugsDataSearch(
        bugsDataSate.filter(
          bug =>
            bug.title.toLowerCase().includes(searchGlobalQuery.toLowerCase()) ||
            bug.description.toLowerCase().includes(searchGlobalQuery.toLowerCase())
        )
      );
    } 
    // else {
    //   setBugsDataSate(bugsData);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchGlobalQuery]);

  // uncomment useFetchAllBugs related and comment bugsData to test remot api
  const { fetchingState, setBugsDataSate, bugsDataSate } = useFetchAllBugs();
  const { priorityData, solvedData, solvedBy } = usePopulateCharts(bugsDataSate);
  const handleGlobalChange = editedBug => {
    setBugsDataSate(
      bugsDataSate.map(bug => (bug.id === editedBug.id ? { ...bug, ...editedBug } : bug))
    );
    if (searchGlobalQuery) {
      setBugsDataSearch(
        bugsDataSearch.map(bug => (bug.id === editedBug.id ? { ...bug, ...editedBug } : bug))
      );
    }
  };
  const handleDeleteBug = id => {
    setBugsDataSate(bugsDataSate.filter(bug => bug.id !== id));
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
              <BugForm bugsDataSate={bugsDataSate} setBugsDataSate={setBugsDataSate} />
              <BugsList
                bugsDataSate={bugsDataSate}
                // bugsDataSearch={bugsDataSearch}
                setBugsDataSate={setBugsDataSate}
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
                bugsDataSate={searchGlobalQuery ? bugsDataSearch : bugsDataSate}
                setBugsDataSate={setBugsDataSate}
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
