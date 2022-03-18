import axios from 'axios';
import {useEffect, useState} from 'react';

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {data: productData} = await axios.get(url);
      setData(productData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {error, loading, data};
}

export default useFetch;
