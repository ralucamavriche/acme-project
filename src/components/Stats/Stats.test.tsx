import { render, screen } from '@testing-library/react';
import Stats from './Stats';

describe('Stats', () => {
  it('renders all stat labels', () => {
    render(<Stats />);
    expect(screen.getByRole('heading', { name: /Collected/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Pending/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Total Invoices/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Total Customers/i })).toBeInTheDocument();
  });
  it('renders the stats amounts correctly', () => {
    render(<Stats />);
    expect(screen.getByRole('heading', { name: '$2,947.26' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '$1,256.32' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '13' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '6' })).toBeInTheDocument();
  });
  it('renders the icons correctly', () => {
    render(<Stats />);
    expect(document.querySelectorAll('svg').length).toBe(4);
  });
});
