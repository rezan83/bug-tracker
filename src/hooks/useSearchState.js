import { useState, useEffect } from 'react';
export const useSearchState = bugsDataState => {
  // the search text
  const [searchGlobalQuery, setSearchGlobalQuery] = useState('');
  // the filtered data based on search``
  const [bugsDataSearch, setBugsDataSearch] = useState([]);

  useEffect(() => {
    // if the search query isn't empty
    if (searchGlobalQuery) {
      // search title, description and assignee
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
