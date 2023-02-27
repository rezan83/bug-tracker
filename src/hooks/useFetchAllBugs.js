import { useState, useEffect } from 'react';
export const useFetchAllBugs = () => {
  const [bugsDataSate, setBugsDataSate] = useState([]);
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
  const URL = 'https://flask-example-psi.vercel.app/'

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
    //   
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { bugsDataSate, setBugsDataSate, fetchingState };
};
