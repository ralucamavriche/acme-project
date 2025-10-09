import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import * as customerService from '../../services/api/customer.api';
import { sampleCustomers } from '../../utils/customersDummyData';
import { useCustomers, useGetAllCustomers, useGetCustomerById } from './useCustomers';

vi.mock('../../services/api/customer.api', () => ({
  getAllCustomers: vi.fn(),
  getCustomerById: vi.fn(),
  getPaginatedCustomers: vi.fn(),
  getTotalCustomersBySearchQuery: vi.fn(),
}));

describe('useGetAllCustomers', () => {
  it('fetches all customers', async () => {
    (customerService.getAllCustomers as ReturnType<typeof vi.fn>).mockResolvedValue(
      sampleCustomers,
    );

    const { result } = renderHook(() => useGetAllCustomers());

    expect(result.current.loading).toBe(true);
    expect(result.current.customers).toStrictEqual([]);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.customers).toEqual(sampleCustomers);
    expect(customerService.getAllCustomers).toHaveBeenCalledTimes(1);
  });
});

describe('useGetCustomerById', () => {
  it('fetches customer by id', async () => {
    (customerService.getCustomerById as ReturnType<typeof vi.fn>).mockResolvedValue(
      sampleCustomers[0],
    );
    const { result } = renderHook(() => useGetCustomerById('1'));

    expect(result.current.customer).toBeNull();

    await waitFor(() => expect(result.current.customer).toEqual(sampleCustomers[0]));

    expect(customerService.getCustomerById).toHaveBeenCalledWith('1');
    expect(customerService.getCustomerById).toHaveBeenCalledTimes(1);
  });
});

describe('useCustomers', () => {
  it('fetches paginated customers', async () => {
    (customerService.getPaginatedCustomers as ReturnType<typeof vi.fn>).mockResolvedValue(
      sampleCustomers.slice(0, 6),
    );
    (customerService.getTotalCustomersBySearchQuery as ReturnType<typeof vi.fn>).mockResolvedValue(
      50,
    );

    const { result } = renderHook(() => useCustomers(1));

    expect(result.current.loading).toBe(true);
    expect(result.current.customers).toBeNull();
    expect(result.current.page).toBe(1);
    expect(result.current.search).toBe('');
    expect(result.current.totalPages).toBe(0);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.customers).toEqual(sampleCustomers.slice(0, 6));
    expect(customerService.getPaginatedCustomers).toHaveBeenCalledTimes(1);
    expect(customerService.getTotalCustomersBySearchQuery).toHaveBeenCalledWith('');
    expect(customerService.getTotalCustomersBySearchQuery).toHaveBeenCalledTimes(1);
  });
});
