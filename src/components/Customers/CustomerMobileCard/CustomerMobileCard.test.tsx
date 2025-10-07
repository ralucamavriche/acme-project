import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { sampleCustomers } from '../../../utils/customersDummyData';
import CustomerMobileCard from './CustomerMobileCard';

describe('CustomerMobileCard', () => {
  it('renders the correct customer information', () => {
    render(
      <MemoryRouter>
        <CustomerMobileCard customers={sampleCustomers} />
      </MemoryRouter>,
    );

    sampleCustomers.forEach((customer) => {
      const img = screen.getByRole('img', { name: `${customer.customerName}'s profile picture` });
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', customer.customerAvatar);
    });
  });
});
