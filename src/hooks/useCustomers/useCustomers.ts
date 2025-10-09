import { useEffect, useState } from 'react';
import {
  getAllCustomers,
  getCustomerById,
  getPaginatedCustomers,
  getTotalCustomersBySearchQuery,
} from '../../services/api/customer.api';
import type { Customer } from '../../types';

interface UseGetAllCustomersReturn {
  customers: Customer[];
  loading?: boolean;
}

export function useGetAllCustomers(): UseGetAllCustomersReturn {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      try {
        const response = await getAllCustomers<Customer[] | null>();
        if (response) setCustomers(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);
  return { customers, loading };
}

export function useGetCustomerById(id: string): { customer: Customer | null } {
  const [customer, setCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    const fetchCustomerById = async () => {
      try {
        const response = await getCustomerById<Customer | null>(id);
        if (response) setCustomer(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCustomerById();
  }, [id]);
  return { customer };
}

const ITEMS_PER_PAGE = 6;

export function useCustomers(initialPage = 1) {
  const [search, setSearch] = useState('');
  const [customers, setCustomers] = useState<Customer[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(initialPage);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      try {
        const newTotal = await getTotalCustomersBySearchQuery(search);
        console.log({ newTotal });

        const params = new URLSearchParams({
          page: page.toString(),
          limit: ITEMS_PER_PAGE.toString(),
          search: search || '',
        });

        const customers = await getPaginatedCustomers<Customer[]>(params);
        if (customers) {
          setCustomers(customers);
          setTotal(newTotal);
        }
      } catch (err) {
        console.error(err || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [page, search]);

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return { customers, loading, totalPages, page, setPage, search, setSearch };
}
