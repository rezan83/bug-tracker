import React from 'react';
import BugForm from '../components/BugForm';
import BugsList from '../components/BugsList/BugsList';
import SortAndFilter from '../components/SortAndFilter';

const Report = ({
  bugsDataState,
  setBugsDataState,
  handleGlobalChange,
  handleDeleteBug,
  bugsFilter,
  setBugsFilter,
  bugsFilterDataState
}) => {
  return (
    <>
      <BugForm bugsDataState={bugsDataState} setBugsDataState={setBugsDataState} />
      <SortAndFilter {...{ bugsFilter, setBugsFilter }} />
      <BugsList
        bugsDataState={!bugsFilter.set ? bugsDataState : bugsFilterDataState}
        setBugsDataState={setBugsDataState}
        handleGlobalChange={handleGlobalChange}
        handleDeleteBug={handleDeleteBug}
      />
    </>
  );
};

export default Report;
