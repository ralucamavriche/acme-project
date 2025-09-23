import { useEffect, useState } from 'react';
import CreateInvoiceButton from '../../components/Button/CreateInvoiceButton';
import Customers from '../../components/Customers';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import { getAllCustomers } from '../../services/api/customer.api';
import { Customer } from '../../types';

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
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCustomers: Array<Customer> = customers.filter((customer) => {
    const query = searchQuery.toLowerCase();
    return Object.values(customer).some(
      (value) => typeof value === 'string' && value.toLowerCase().includes(query),
    );
  });
  const totalPages: number = Math.ceil(filteredCustomers.length / ITEMS_PER_PAGE);
  const paginatedItems: Array<Customer> = filteredCustomers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );
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
    getAllCustomers()
      .then((data) => setCustomers(data))
      .catch((error) => console.error(error));
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
        <Customers customers={paginatedItems} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPreviousPageHandle={handlePreviousPage}
          onNextPageHandle={handleNextPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default InvoicesPage;
