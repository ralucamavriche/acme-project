import { useEffect, useState } from 'react';

/**
 * Returns a size array with the current window width and height.
 * Updates the size whenever the window is resized.
 * @returns {[number, number]} - [width, height]
 */

const useResize = (): [number, number] => {
  const [size, setSize] = useState<[number, number]>([0, 0]);
  useEffect(() => {
    const getSize = () => setSize([window.innerWidth, window.innerHeight]);
    getSize();
    window.addEventListener('resize', getSize);
    return () => window.removeEventListener('resize', getSize);
  }, []);
  return size;
};

export default useResize;
