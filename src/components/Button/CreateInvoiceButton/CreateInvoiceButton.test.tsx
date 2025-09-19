import { render, screen } from '@testing-library/react';
import CreateInvoiceButton from './CreateInvoiceButton';
import { MemoryRouter } from 'react-router-dom';

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
