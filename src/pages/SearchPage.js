import React from 'react';
import BugsList from '../components/BugsList/BugsList';
const SearchPage = ({
  bugsDataState,
  setBugsDataState,
  handleGlobalChange,
  handleDeleteBug,
  searchGlobalQuery,
  bugsDataSearch
}) => {
  return (
    <>
      <h2 className="search-page-header">Search Results:</h2>
      <BugsList
        bugsDataState={searchGlobalQuery ? bugsDataSearch : bugsDataState}
        setBugsDataState={setBugsDataState}
        handleGlobalChange={handleGlobalChange}
        handleDeleteBug={handleDeleteBug}
      />
    </>
  );
};

export default SearchPage;
