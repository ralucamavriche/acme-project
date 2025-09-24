import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it } from 'vitest';
import DashboardPage from './DashboardPage';

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('DashboardPage', () => {
  it('renders the Dashboard heading', () => {
    render(<DashboardPage />);
    expect(screen.getByRole('heading', { name: /Dashboard/i })).toBeInTheDocument();
  });
});
