import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url, method = 'get', body = null, initialData = []) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios(url, {
      method,
      body
    }).then(({ data }) => {
      setData(data);
    });
    // if the url or method changes, recall the effect
  }, [url, method, body]);

  return data;
};

export default useAxios;
