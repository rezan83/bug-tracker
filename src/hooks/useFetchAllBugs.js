import { useState, useEffect } from 'react';
export const useFetchAllBugs = () => {
  const [bugsDataSate, setBugsDataSate] = useState([]);
  const [fetchingState, setFetchingState] = useState({
    isLoading: true,
    isError: false,
    isReady: false
  });
  const URL = 'https://bugtracker.free.beeceptor.com/';
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
        setBugsDataSate(data);
      })
      .catch(error => {
        console.log(error);
      });

    
    // return () => {
    //   second
    // }
  }, []);
  return { bugsDataSate, setBugsDataSate, fetchingState };
};
