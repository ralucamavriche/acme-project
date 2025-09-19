import { describe, expect, it } from 'vitest';

import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2025-08-13');
    expect(formatDate(date)).toBe('Aug 13, 2025');
  });
});
