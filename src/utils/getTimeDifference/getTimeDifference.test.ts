import moment from 'moment';
import { describe, expect, it } from 'vitest';
import { getTimeDifference } from './getTimeDifference';

describe('getTimeDifference', () => {
  it('returns correct time difference for a past date', () => {
    const pastDate = moment().subtract(3, 'days').toISOString();
    expect(getTimeDifference(pastDate)).toBe('3 days ago');
  });
  it('returns correct time difference for a date a few minutes ago', () => {
    const minutesDate = moment().subtract(10, 'minutes').toISOString();
    expect(getTimeDifference(minutesDate)).toBe('10 minutes ago');
  });

  it('returns "a few seconds ago" for the current date', () => {
    const now = moment().toISOString();
    expect(getTimeDifference(now)).toBe('a few seconds ago');
  });
});
