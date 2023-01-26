import { useState, useEffect } from 'react';

export function useDebounce(fn, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
        timeoutId = null;
      }, delay);
    };
  }

export const SMALL_SCREEN_THRESHOLD = 820;
  
export function useWindowSize(debounceMs = 250) {
    const [size, setSize] = useState([0, 0]);
    const debouncedHandleResize = useDebounce(() => {
      setSize([window.innerWidth, window.innerHeight]);
    }, debounceMs);
  
    useEffect(() => {
      window.addEventListener('resize', debouncedHandleResize);
      debouncedHandleResize();
      return () => window.removeEventListener('resize', debouncedHandleResize);
    }, []);
  
    const [width, height] = size;
    const isSmallScreen = width <= SMALL_SCREEN_THRESHOLD;
    return { width, height, isSmallScreen };
  }