import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // State to manage the array
  const [value, setValue] = useState<T>(() => {
    // Get data from local storage or use initial value
    const jsonValue = localStorage.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue == "function") return (initialValue as () => T)();
    else return initialValue;
  });

  // Update local storage whenever the data changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}

export default useLocalStorage;
