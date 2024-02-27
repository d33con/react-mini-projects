import { useEffect, useState } from "react";

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let theme = localStorage.getItem(key);
    if (theme) {
      return theme;
    } else {
      return String(defaultValue);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
