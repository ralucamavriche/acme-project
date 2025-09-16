import moment from 'moment';

export function getTimeDifference(updatedAt: string): string {
  const now = moment();
  const updated = moment(updatedAt);

  const diffInSeconds = now.diff(updated, 'seconds');
  const diffInMinutes = now.diff(updated, 'minutes');
  const diffInHours = now.diff(updated, 'hours');
  const diffInDays = now.diff(updated, 'days');

  if (diffInSeconds < 5) return 'Updated just now';
  if (diffInSeconds < 60) return `Updated ${diffInSeconds}s ago`;
  if (diffInMinutes < 60) return `Updated ${diffInMinutes}m ago`;
  if (diffInHours < 24) return `Updated ${diffInHours}h ago`;
  if (diffInDays < 7) return `Updated ${diffInDays}d ago`;

  return `Updated on ${updated.format('MMM D, YYYY')}`;
}
