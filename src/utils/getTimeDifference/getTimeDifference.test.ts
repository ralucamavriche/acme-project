import moment from 'moment';
import { describe, expect, it } from 'vitest';
import { getTimeDifference } from './getTimeDifference';

describe('getTimeDifference', () => {
  it('returns "Updated just now" for updates within the last 5 seconds', () => {
    const updatedAt = moment().subtract(3, 'seconds').toISOString();
    expect(getTimeDifference(updatedAt)).toBe('Updated just now');
  });

  it('returns seconds ago for updates within the last minute', () => {
    const updatedAt = moment().subtract(30, 'seconds').toISOString();
    expect(getTimeDifference(updatedAt)).toBe('Updated 30s ago');
  });

  it('returns minutes ago for updates within the last hour', () => {
    const updatedAt = moment().subtract(10, 'minutes').toISOString();
    expect(getTimeDifference(updatedAt)).toBe('Updated 10m ago');
  });

  it('returns hours ago for updates within the last day', () => {
    const updatedAt = moment().subtract(5, 'hours').toISOString();
    expect(getTimeDifference(updatedAt)).toBe('Updated 5h ago');
  });
});
