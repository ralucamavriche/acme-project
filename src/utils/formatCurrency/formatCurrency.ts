/**
 * Returns a currency-friendly formatted string
 * @param {number} value - The amount to format
 * @param {string} currency - The currency code (default: 'USD')
 * @param {string} locale - The locale to use for formatting (default: 'en-US')
 * @returns {string} - The formatted currency string
 */

export function formatCurrency(
  value: number,
  currency: string = 'USD',
  locale: string = 'en-US',
): string {
  const amount = value / 100;
  return amount.toLocaleString(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  });
}
