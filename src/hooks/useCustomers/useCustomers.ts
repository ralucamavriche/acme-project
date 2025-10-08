import { useEffect, useState } from 'react';
import {
  getAllCustomers,
  getCustomerById,
  getPaginatedCustomers,
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

// export function usePaginatedCustomers(page: number, limit: number): UseGetPaginatedCustomersReturn {
//   const [customers, setCustomers] = useState<Customer[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     const fetchPaginatedCustomers = async () => {
//       setLoading(true);
//       try {
//         const response = await getPaginatedCustomers<Customer[] | null>(page, limit);
//         if (response) {
//           setCustomers(response);
//           setTotal(response.length);
//         }
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPaginatedCustomers();
//   }, [page, limit]);

//   return { customers, total, loading };
// }

// const ITEMS_PER_PAGE = 6;

// export function usePaginatedCustomers(page: number, search: string) {
//   const [customers, setCustomers] = useState<Customer[]>([]);
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       setLoading(true);
//       try {
//         const params = new URLSearchParams({
//           page: page.toString(),
//           limit: ITEMS_PER_PAGE.toString(),
//         });
//         if (search) params.set('search', search);

//         const res = await fetch(`${BASE_URL_API}/invoices?${params.toString()}`);
//         if (!res.ok) throw new Error('Failed to fetch customers');
//         const data = await res.json();

//         setCustomers(data.data ?? data);
//         setTotal(data.total ?? data.length);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCustomers();
//   }, [page, search]);

//   const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

//   return { customers, loading, totalPages };
// }

// const ITEMS_PER_PAGE = 6;

// export function useCustomers(currentPage: number, search: string) {
//   const [customers, setCustomers] = useState<Customer[]>([]);
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       setLoading(true);
//       try {
//         const params = new URLSearchParams({
//           page: currentPage.toString(),
//           limit: ITEMS_PER_PAGE.toString(),
//         });
//         if (search) params.set('search', search); // adaugă search doar dacă există

//         const res = await fetch(`/api/customers?${params.toString()}`);
//         if (!res.ok) throw new Error('Failed to fetch customers');

//         const data = await res.json();
//         // API trebuie să returneze { data: Customer[], total: number }
//         setCustomers(data.data);
//         setTotal(data.total);
//       } catch (err) {
//         console.error(err || 'An error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCustomers();
//   }, [currentPage, search]);

//   const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

//   return { customers, loading, totalPages };
// }

const ITEMS_PER_PAGE = 6;
const TOTAL = 50;
export function useCustomers(initialPage = 1) {
  const [customers, setCustomers] = useState<Customer[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      try {
        const response = await getPaginatedCustomers(page, ITEMS_PER_PAGE);
        if (response) {
          setCustomers(response);
        }
      } catch (err) {
        console.error(err || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [page]);

  const total = Math.ceil(TOTAL / ITEMS_PER_PAGE);

  return { customers, loading, total, page, setPage };
}
