import { Link, useParams } from 'react-router-dom';
import EditInvoiceForm from '../../../components/EditInvoiceForm';
import { useGetAllCustomers } from '../../../hooks/useCustomers';

const UpdateInvoiceMetadata = () => {
  return (
    <>
      <title>ACME | Update Invoice</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Update and manage your invoices effortlessly with ACME." />
      <meta name="theme-color" content="#0070fb" />
    </>
  );
};

const UpdateInvoicePage = () => {
  const { customers } = useGetAllCustomers();
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <UpdateInvoiceMetadata />
      <div className="flex h-full flex-col p-6 md:p-12">
        <div className="mb-4 flex font-lusitana text-2xl md:mb-8">
          <Link className="text-gray-500" to="/dashboard/invoices">
            Invoices<span className="ml-3">/</span>
          </Link>
          <Link className="ml-3" to={`/dashboard/invoices/${id}/edit`}>
            Edit Invoice
          </Link>
        </div>
        <EditInvoiceForm customers={customers} id={id} />
      </div>
    </>
  );
};

export default UpdateInvoicePage;
