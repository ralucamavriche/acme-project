import { describe, expect, it, vi } from 'vitest';

import { fetchData } from './api';

describe('fetchData', () => {
  it('throws error for bad response', async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({}),
      } as Response),
    );
    await expect(fetchData('url')).rejects.toThrow('Network response was not ok');
  });
  it('returns data when response is ok', async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: 'test' }),
      } as Response),
    );
    const data = await fetchData('url');
    expect(data).toEqual({ data: 'test' });
  });
});
