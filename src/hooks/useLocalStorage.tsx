import { useState } from 'react';

export function useLocalStorage<T = string>(key: string, initialValue?: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      try {
        return JSON.parse(item) as T;
      } catch {
        console.warn(`Error parsing JSON from localStorage key "${key}".`);
      }
    }
    if (initialValue !== undefined) {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }

    throw new Error(
      `No initial value provided for key "${key}" and no value in localStorage.`,
    );
  });

  const setValue = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue] as const;
}
