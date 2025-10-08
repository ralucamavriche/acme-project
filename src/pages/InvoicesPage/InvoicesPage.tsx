import { useMemo, useState } from 'react';
import CreateInvoiceButton from '../../components/Button/CreateInvoiceButton';
import Customers from '../../components/Customers';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import Spinner from '../../components/Spinner';
import { useCustomers } from '../../hooks/useCustomers';
import type { Customer } from '../../types';

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
  const [searchQuery, setSearchQuery] = useState('');
  const { customers, loading, total, page, setPage } = useCustomers();

  const filteredCustomers: Array<Customer> = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return (customers ?? []).filter((customer) =>
      Object.values(customer).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(query),
      ),
    );
  }, [customers, searchQuery]);

  const handlePreviousPage = (): void => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = (): void => {
    if (page < total) setPage(page + 1);
  };

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
    setPage(1);
  };

  return (
    <>
      <InvoiceMetadata />
      <div className="flex h-full flex-col p-6 md:p-12">
        <h1 className="mb-4 font-lusitana text-2xl md:mb-8">Invoices</h1>
        <div className="mb-4 flex justify-between gap-2">
          <SearchBar handleSearch={handleSearch} />
          <CreateInvoiceButton path="/dashboard/invoices/create" />
        </div>
        {loading ? (
          <div role="status" className="flex justify-center py-8">
            <Spinner />
          </div>
        ) : filteredCustomers.length === 0 ? (
          <div className="py-8 text-center text-gray-500">No results found.</div>
        ) : (
          <>
            <Customers customers={customers ?? []} />
            <Pagination
              totalPages={total}
              currentPage={page}
              onPreviousPageHandle={handlePreviousPage}
              onNextPageHandle={handleNextPage}
              onPageChange={setPage}
            />
          </>
        )}
      </div>
    </>
  );
};

export default InvoicesPage;
