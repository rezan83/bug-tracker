import { useState, useEffect } from 'react';

export const useFetchAllBugs = () => {
  // if set is false, componant will show normal data
  const [bugsFilter, setBugsFilter] = useState({ sortPriority: 1, showSolved: true, set: false });
  // filtred data
  const [bugsFilterDataState, setBugsFilterDataState] = useState([]);
  // normal fetched data``
  const [bugsDataState, setBugsDataState] = useState([]);
  const [fetchingState, setFetchingState] = useState({
    isLoading: true,
    isError: false,
    isReady: false
  });

  // might not work 500 req/day
  // const URL = 'https://bugtracker.free.beeceptor.com/';

  // local server: 1- install python 2-run: pip install sanic[ext] 3- run: sanic server.app
  // const URL = 'http://localhost:8000/'

  // working server
  const URL = 'https://flask-example-psi.vercel.app/';

  // responsible of fetching data
  useEffect(() => {
    fetch(URL)
      .then(res => {
        if (!res.ok) {
          setFetchingState({ ...fetchingState, isLoading: false, isError: true });
          throw new Error('could not fetch data, please try again later');
        }
        return res.json();
      })
      .then(data => {
        setFetchingState({ isReady: !!data.length, isLoading: false, isError: false });
        setBugsDataState(data);
      })
      .catch(error => {
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // responsible of sort/filtering data
  useEffect(() => {
    setBugsFilterDataState(() => {
      if (bugsFilter.set) {
        return [...bugsDataState]
          .sort((bug1, bug2) => bugsFilter.sortPriority * (bug1.priority - bug2.priority))
          .filter(bug => (bugsFilter.showSolved ? bug : !bug.solved));
      }

      return bugsDataState;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bugsFilter]);

  return {
    fetchingState,
    bugsDataState,
    setBugsDataState,
    bugsFilter,
    setBugsFilter,
    bugsFilterDataState,
    setBugsFilterDataState
  };
};
