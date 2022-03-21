import axios from 'axios';
import {useEffect, useState} from 'react';
import Config from 'react-native-config';

const BASE_URL = 'http://ws.audioscrobbler.com/2.0/';

function useFetch(option) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {data: productData} = await axios.get(BASE_URL, {
        params: {api_key: Config.API_KEY, format: 'json', ...option},
      });
      setData(productData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [option]);

  return {error, loading, data};
}

export default useFetch;
