import { useState } from "react";

const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        return JSON.parse(storedValue);
      }
    } catch (e) {
      console.log(e);
      return defaultValue;
    }
    return defaultValue;
  });

  const setItem = (value: any) => {
    try {
      setValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  return [value, setItem];
};

export default useLocalStorage;
