/**
 * Returns a formatted date string
 * @param {Date} date - The date to format
 * @returns {string} - The formatted date string
 */

export function formatDate(date: Date): string {
  const formatted = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  return formatted;
}
