import { useState } from "react";

const useLocalStorage = <T,>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        return JSON.parse(storedValue);
      }
    } catch (e) {
      console.log(e);
      return defaultValue;
    }
  });

  const setItem = (value: T) => {
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
