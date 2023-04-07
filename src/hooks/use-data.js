import { useState, useEffect } from 'react';

const useData = (url, transformData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data.');
        }
        return response.json();
      })
      .catch((error) => setError(error))
      .then((data) => {
        setData(transformData(data));
        setIsLoading(false);
      });
  }, [transformData, url]);
  return [data, isLoading, error];
};

export default useData;
