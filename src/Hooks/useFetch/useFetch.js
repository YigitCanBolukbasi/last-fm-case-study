import {useQuery} from 'react-query';

function useFetch(name, url) {
  const {isLoading, error, data, isSuccess} = useQuery(name, () =>
    fetch(url).then(res => res.json()),
  );

  return {error, isLoading, data, isSuccess};
}

export default useFetch;
