import { useCallback } from 'react';

const usePreventDefault = (callback, deps) => {
  return useCallback((e, ...args) => {
    e.preventDefault();
    callback(e, ...args);
  }, deps);
}

export default usePreventDefault;