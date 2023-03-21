import { useState } from 'react';

export default function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (arg: T) => void] {
  const readValue = (): T => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = (value: T): void => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
