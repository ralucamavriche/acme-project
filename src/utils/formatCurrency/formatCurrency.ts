/**
 * Returns a currency-friendly formatted string
 * @param {number | string} value - The amount to format
 * @param {string} currency - The currency code (default: 'USD')
 * @param {string} locale - The locale to use for formatting (default: 'en-US')
 * @returns {string} - The formatted currency string
 */

export function formatCurrency(
  value: number | string,
  currency: string = 'USD',
  locale: string = 'en-US',
): string {
  const amountNumber = typeof value === 'string' ? parseFloat(value) : value;

  const amount = amountNumber / 100;
  return amount.toLocaleString(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  });
}
