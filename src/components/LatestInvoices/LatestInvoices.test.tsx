import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LatestInvoices from './LatestInvoices';

describe('LatestInvoices', () => {
  it('renders correctly', () => {
    render(<LatestInvoices />);
    expect(screen.getByRole('heading', { name: /Latest Invoices/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Updated just now' })).toBeInTheDocument();
  });
  it('renders the latest invoices correctly', () => {
    render(<LatestInvoices />);
    expect(document.querySelector('svg')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Balazs Orban' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'balazs.orban@example.com' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '$345.77' })).toBeInTheDocument();
  });
});
