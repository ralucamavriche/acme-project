import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('formats number to USD currency by default', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  it('formats number to specified currency', () => {
    expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56');
  });
});
