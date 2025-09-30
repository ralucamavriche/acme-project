import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { sampleCustomers } from '../../../utils/customersDummyData';
import CustomerDesktopCard from './CustomerDesktopCard';

describe('CustomerDesktopCard', () => {
  it('renders the correct number of rows', () => {
    render(
      <MemoryRouter>
        <CustomerDesktopCard customers={sampleCustomers} />
      </MemoryRouter>,
    );

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(sampleCustomers.length + 1);
  });
});
