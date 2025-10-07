import { useEffect, useState } from 'react';
import { getAllCustomers, getCustomerById } from '../../services/api/customer.api';
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
