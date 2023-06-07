/* eslint-disable no-empty */
import { useState } from 'react';
import cookie from 'js-cookie';

export const useCookie = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = cookie.get(keyName);
      if (value) {
        return JSON.parse(value);
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      cookie.set(keyName, JSON.stringify(newValue), { expires: 1 });
    } catch (err) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
