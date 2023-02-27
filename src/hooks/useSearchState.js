import { useState, useEffect } from 'react';
export const useSearchState = bugsDataState => {
  const [searchGlobalQuery, setSearchGlobalQuery] = useState('');
  const [bugsDataSearch, setBugsDataSearch] = useState([]);

  useEffect(() => {
    if (searchGlobalQuery) {
      setBugsDataSearch(
        bugsDataState.filter(
          bug =>
            bug.title.toLowerCase().includes(searchGlobalQuery.toLowerCase()) ||
            bug.description.toLowerCase().includes(searchGlobalQuery.toLowerCase()) ||
            bug.assignee.toLowerCase().includes(searchGlobalQuery.toLowerCase())
        )
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchGlobalQuery]);
  return { searchGlobalQuery, setSearchGlobalQuery, bugsDataSearch, setBugsDataSearch };
};
