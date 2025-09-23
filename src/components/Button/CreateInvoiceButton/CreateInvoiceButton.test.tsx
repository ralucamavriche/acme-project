import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import CreateInvoiceButton from './CreateInvoiceButton';

describe('CreateInvoiceButton', () => {
  it('renders link with correct path', () => {
    render(
      <MemoryRouter>
        <CreateInvoiceButton path="/invoices/create" />
      </MemoryRouter>,
    );
    const linkElement = screen.getByRole('link', { name: /Create Invoice/i });
    expect(linkElement).toHaveAttribute('href', '/invoices/create');
  });
});
