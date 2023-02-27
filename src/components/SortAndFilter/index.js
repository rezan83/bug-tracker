import React from 'react';
import './sort-and-filter.css';

const SortAndFilter = ({ bugsFilter, setBugsFilter }) => {
  const handelShowSolved = () => {
    setBugsFilter(bugsFilter => ({
      ...bugsFilter,
      showSolved: !bugsFilter.showSolved,
      set: true
    }));
  };
  const handelSortPriority = () => {
    setBugsFilter(bugsFilter => ({
      ...bugsFilter,
      sortPriority: -bugsFilter.sortPriority,
      set: true
    }));
  };
  const handelFilterReset = () => {
    setBugsFilter({ sortPriority: 1, showSolved: true, set: false });
  };
  return (
    <div className="sort-and-filter">
      <button className={bugsFilter.set ? '' : 'filter-reset'} onClick={handelSortPriority}>
        Priority: {bugsFilter.sortPriority > 0 ? <span>&darr;</span> : <span>&uarr;</span>}
      </button>
      <button className={bugsFilter.set ? '' : 'filter-reset'} onClick={handelShowSolved}>
        Solved: {bugsFilter.showSolved ? 'Show' : 'Hide'}
      </button>
      <button className={bugsFilter.set ? 'filter-reset' : ''} onClick={handelFilterReset}>
        Reset {bugsFilter.set ? '' : <span>&#128504;</span>}
      </button>
    </div>
  );
};

export default SortAndFilter;
