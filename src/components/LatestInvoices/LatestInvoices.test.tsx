import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LatestInvoices from './LatestInvoices';

describe('LatestInvoices', () => {
  it('renders correctly', () => {
    render(<LatestInvoices />);
    expect(screen.getByRole('heading', { name: /Latest Invoices/i })).toBeInTheDocument();
  });
  it('renders the latest icon invoices correctly', () => {
    render(<LatestInvoices />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});
