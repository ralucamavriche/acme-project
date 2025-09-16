export function formatCurrency(
  value: number,
  currency: string = 'USD',
  locale: string = 'en-US',
): string {
  return value.toLocaleString(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  });
}
