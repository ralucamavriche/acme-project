/**
 * Returns a debounced version of the provided function
 * @param {Function} callback - The function to debounce
 * @param {number} delay - The debounce timeout in milliseconds (default: 300ms)
 * @returns {Function} - The debounced function
 */
export const debounce = <T extends unknown[]>(callback: (...args: T) => void, delay = 300) => {
  let timeoutTimer: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timeoutTimer);

    timeoutTimer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
