import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem(key)) || defaultValue);
  }, []);

  useEffect(() => {
    if (value !== defaultValue) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value]);
  return [value, setValue];
};

export default useLocalStorage;
