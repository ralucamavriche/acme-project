import CreateInvoiceButton from '../../components/Button/CreateInvoiceButton';
import Customers from '../../components/Customers';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import { useCustomers } from '../../hooks/useCustomers';

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
  const { customers, loading, totalPages, page, setPage, search, setSearch } = useCustomers();

  const handlePreviousPage = (): void => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = (): void => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleSearch = (query: string): void => {
    setSearch(query);
    setPage(1);
  };

  return (
    <>
      <InvoiceMetadata />
      <div className="flex h-full flex-col p-6 md:p-12">
        <h1 className="mb-4 font-lusitana text-2xl md:mb-8">Invoices</h1>
        <div className="mb-4 flex justify-between gap-2">
          <SearchBar search={search} handleSearch={handleSearch} />
          <CreateInvoiceButton path="/dashboard/invoices/create" />
        </div>
        <Customers loading={loading} customers={customers ?? []} />
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPreviousPageHandle={handlePreviousPage}
          onNextPageHandle={handleNextPage}
          onPageChange={setPage}
        />
      </div>
    </>
  );
};

export default InvoicesPage;
