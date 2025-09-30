import { Link } from 'react-router-dom';
import CreateInvoiceForm from '../../../components/CreateInvoiceForm';
import { useGetAllCustomers } from '../../../hooks/useCustomers';

const CreateInvoiceMetadata = () => {
  return (
    <>
      <title>ACME | Create Invoice</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Create and manage your invoices effortlessly with ACME. Streamline your billing process and keep track of all your transactions in one place."
      />
      <meta name="theme-color" content="#0070fb" />
    </>
  );
};

const CreateInvoicePage = () => {
  const { customers } = useGetAllCustomers();

  return (
    <>
      <CreateInvoiceMetadata />
      <div className="flex h-full flex-col p-6 md:p-12">
        <div className="mb-4 flex font-lusitana text-2xl md:mb-8">
          <Link className="text-gray-500" to="/dashboard/invoices">
            Invoices<span className="ml-3">/</span>
          </Link>
          <Link className="ml-3" to="/dashboard/invoices/create/">
            Create Invoice
          </Link>
        </div>
        <CreateInvoiceForm customers={customers} />
      </div>
    </>
  );
};

export default CreateInvoicePage;
