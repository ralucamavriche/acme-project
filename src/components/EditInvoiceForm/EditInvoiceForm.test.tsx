import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { sampleCustomers } from '../../utils/customersDummyData';
import EditInvoiceForm from './EditInvoiceForm';

describe('EditInvoiceForm', () => {
  it('renders customer options', () => {
    render(
      <MemoryRouter>
        <EditInvoiceForm customers={sampleCustomers} id="1" />
      </MemoryRouter>,
    );

    expect(screen.getByRole('option', { name: 'John Doe' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Jane Smith' })).toBeInTheDocument();
  });
});
