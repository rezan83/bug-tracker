// uncomment useFetchAllBugs related and comment bugsData to test remot api
// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Report from './pages/Report';
import SearchPage from './pages/SearchPage';
import NavBar from './components/Navigation/NavBar';
import ScrollToTop from './components/Navigation/ScrollToTop';
import Dashboard from './pages/Dashboard';
import Loading from './pages/Loading';
import FetchError from './pages/FetchError';

import { useSearchState } from './hooks/useSearchState';
import { usePopulateCharts } from './hooks/usePopulateCharts';
// uncomment useFetchAllBugs related and comment bugsData to test remot api
// import { bugsData } from './bugsData';
// uncomment useFetchAllBugs related and comment bugsData to test remot api
import { useFetchAllBugs } from './hooks/useFetchAllBugs';

function App() {
  // uncomment useFetchAllBugs related and comment bugsData to test remot api
  const {
    fetchingState,
    setBugsDataState,
    bugsDataState,
    bugsFilter,
    setBugsFilter,
    bugsFilterDataState,
    setBugsFilterDataState
  } = useFetchAllBugs();
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
    if (bugsFilter.set) {
      setBugsFilterDataState(
        bugsFilterDataState.map(bug => (bug.id === editedBug.id ? { ...bug, ...editedBug } : bug))
      );
    }
  };
  const handleDeleteBug = id => {
    setBugsDataState(bugsDataState.filter(bug => bug.id !== id));
    if (searchGlobalQuery) {
      setBugsDataSearch(bugsDataSearch.filter(bug => bug.id !== id));
    }
    if (bugsFilter.set) {
      setBugsFilterDataState(bugsFilterDataState.filter(bug => bug.id !== id));
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
              {fetchingState.isLoading && <Loading />}
              {fetchingState.isError && <FetchError />}
              {fetchingState.isReady && <Dashboard {...{ priorityData, solvedData, solvedBy }} />}
            </>
          }
        />
        <Route
          path="/report"
          element={
            <Report
              {...{
                bugsDataState,
                setBugsDataState,
                handleGlobalChange,
                handleDeleteBug,
                bugsFilter,
                setBugsFilter,
                bugsFilterDataState
              }}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              {...{
                bugsDataState,
                setBugsDataState,
                handleGlobalChange,
                handleDeleteBug,
                searchGlobalQuery,
                bugsDataSearch
              }}
            />
          }
        />
      </Routes>

      <ScrollToTop />
    </div>
  );
}

export default App;
