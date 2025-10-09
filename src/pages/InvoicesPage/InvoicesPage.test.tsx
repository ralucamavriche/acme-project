import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import InvoicesPage from './InvoicesPage';

describe('InvoicesPage', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <InvoicesPage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /invoices/i })).toBeInTheDocument();
  });
});
