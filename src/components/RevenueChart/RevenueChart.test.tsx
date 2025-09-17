import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RevenueChart from './RevenueChart';

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('RevenueChart', () => {
  it('renders Recent Revenue heading and Last 12 months text', () => {
    render(<RevenueChart />);
    expect(screen.getByRole('heading', { name: /Recent Revenue/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Last 12 months/i })).toBeInTheDocument();
  });
  it('renders the CalendarIcon icon', () => {
    render(<RevenueChart />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});
