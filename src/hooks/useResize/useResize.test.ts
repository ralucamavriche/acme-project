import { act, renderHook } from '@testing-library/react';
import useResize from './useResize';

describe('useResize', () => {
  beforeEach(() => {
    window.innerWidth = 1024;
    window.innerHeight = 768;
  });
  it('should return initial window size', () => {
    const { result } = renderHook(() => useResize());
    expect(result.current).toEqual([1024, 768]);
  });
  it('should update when window is resized', () => {
    const { result } = renderHook(() => useResize());
    act(() => {
      window.innerWidth = 800;
      window.innerHeight = 600;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toEqual([800, 600]);
  });
});
