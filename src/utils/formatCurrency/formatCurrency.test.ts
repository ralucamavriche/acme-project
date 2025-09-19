import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('formats number to USD currency by default', () => {
    expect(formatCurrency(123456)).toBe('$1,234.56');
  });

  it('formats number to specified currency', () => {
    expect(formatCurrency(123456, 'EUR')).toBe('€1,234.56');
  });
  it('formats string to USD currency by default', () => {
    expect(formatCurrency('123456')).toBe('$1,234.56');
  });
});
