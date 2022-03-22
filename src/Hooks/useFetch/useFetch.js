import axios from 'axios';
import {useEffect, useState} from 'react';
import Config from 'react-native-config';
import {useQuery} from 'react-query';

const BASE_URL = 'http://ws.audioscrobbler.com/2.0/';

function useFetch(name, url) {
  const {isLoading, error, data, isSuccess} = useQuery(name, () =>
    fetch(url).then(res => res.json()),
  );

  return {error, isLoading, data, isSuccess};
}

export default useFetch;
