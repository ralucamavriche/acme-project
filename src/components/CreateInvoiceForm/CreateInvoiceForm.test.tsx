import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { sampleCustomers } from '../../utils/customersDummyData';
import CreateInvoiceForm from './CreateInvoiceForm';

describe('CreateInvoiceForm', () => {
  beforeEach(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  it('renders customer options', () => {
    render(
      <MemoryRouter>
        <CreateInvoiceForm customers={sampleCustomers} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('option', { name: 'John Doe' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Jane Smith' })).toBeInTheDocument();
  });

  it('submits with filled data', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <CreateInvoiceForm customers={sampleCustomers} />
      </MemoryRouter>,
    );

    await user.selectOptions(screen.getByLabelText('Choose customer'), '1');
    await user.type(screen.getByPlaceholderText('Enter USD amount'), '123.45');
    await user.click(screen.getByLabelText(/pending/i));
    await user.click(screen.getByRole('button', { name: /create invoice/i }));

    expect(window.alert).toHaveBeenCalledWith('Customer: 1, Amount: 123.45, Status: pending');
  });
});
