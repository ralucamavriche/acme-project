import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import * as api from '../../services/api/customer.api';
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

  it('renders the spinner while loading', async () => {
    vi.spyOn(api, 'getAllCustomers').mockImplementation(() => new Promise(() => {}));
    render(
      <MemoryRouter>
        <InvoicesPage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
