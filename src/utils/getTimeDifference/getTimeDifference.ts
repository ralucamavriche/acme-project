import moment from 'moment';

/**
 * Returns a human-friendly relative time string
 * @param {string} updatedAt - The last update timestamp
 * @returns {string} - Example: "just now", "30 seconds ago", "3 days ago"
 */

export function getTimeDifference(updatedAt: string): string {
  const updated = moment(updatedAt);
  return moment(updated).fromNow();
}
