import React from 'react';
import BugForm from '../components/BugForm';
import BugsList from '../components/BugsList/BugsList';

const Report = ({ bugsDataState, setBugsDataState, handleGlobalChange, handleDeleteBug }) => {
  return (
    <>
      <BugForm bugsDataState={bugsDataState} setBugsDataState={setBugsDataState} />
      <BugsList
        bugsDataState={bugsDataState}
        setBugsDataState={setBugsDataState}
        handleGlobalChange={handleGlobalChange}
        handleDeleteBug={handleDeleteBug}
      />
    </>
  );
};

export default Report;
