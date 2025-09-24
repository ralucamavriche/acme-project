import { useEffect, useMemo, useState } from 'react';
import CreateInvoiceButton from '../../components/Button/CreateInvoiceButton';
import Customers from '../../components/Customers';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import Spinner from '../../components/Spinner';
import { getAllCustomers } from '../../services/api/customer.api';
import type { Customer } from '../../types';

const ITEMS_PER_PAGE = 6;

const InvoiceMetadata = () => {
  return (
    <>
      <title>ACME | Invoices</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="View, manage, and organize all your invoices in one place with Acme. Easily access invoice details, track activity, and streamline your business relationships."
      />
      <meta name="theme-color" content="#0070fb" />
    </>
  );
};

const InvoicesPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const filteredCustomers: Array<Customer> = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return customers.filter((customer) =>
      Object.values(customer).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(query),
      ),
    );
  }, [customers, searchQuery]);

  const totalPages: number = useMemo(() => {
    return Math.ceil(filteredCustomers.length / ITEMS_PER_PAGE);
  }, [filteredCustomers]);

  const paginatedItems: Array<Customer> = useMemo(() => {
    return filteredCustomers.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE,
    );
  }, [filteredCustomers, currentPage]);

  const handlePreviousPage = (): void => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      try {
        const data = await getAllCustomers<Customer[] | null>();
        if (data) setCustomers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  return (
    <>
      <InvoiceMetadata />
      <div className="flex h-full flex-col p-6 md:p-12">
        <h1 className="mb-4 font-lusitana text-2xl md:mb-8">Invoices</h1>
        <div className="mb-4 flex justify-between gap-2">
          <SearchBar handleSearch={handleSearch} />
          <CreateInvoiceButton path="/invoices/create" />
        </div>
        {loading ? (
          <div role="status" className="flex justify-center py-8">
            <Spinner />
          </div>
        ) : filteredCustomers.length === 0 ? (
          <div className="py-8 text-center text-gray-500">No results found.</div>
        ) : (
          <>
            <Customers customers={paginatedItems} />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPreviousPageHandle={handlePreviousPage}
              onNextPageHandle={handleNextPage}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </>
  );
};

export default InvoicesPage;
