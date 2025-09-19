import CreateInvoiceButton from '../../components/Button/CreateInvoiceButton';
import Customers from '../../components/Customers';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import { mockCustomers } from './mockCustomers';

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

const InvoicesPage: React.FC = () => (
  <>
    <InvoiceMetadata />
    <div className="flex h-full flex-col p-6 md:p-12">
      <h1 className="mb-4 font-lusitana text-2xl md:mb-8">Invoices</h1>
      <div className="mb-4 flex justify-between gap-2">
        <SearchBar />
        <CreateInvoiceButton path="/invoices/create" />
      </div>
      <Customers mockCustomers={mockCustomers} />
      <Pagination />
    </div>
  </>
);

export default InvoicesPage;
