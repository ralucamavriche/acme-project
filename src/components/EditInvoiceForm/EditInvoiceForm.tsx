import { CurrencyDollarIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCustomerById } from '../../hooks/useCustomers';
import type { Customer } from '../../types';
import StatusButton from '../Button/StatusButton';

type EditInvoiceFormProps = {
  customers: Customer[];
  id: string | undefined;
};
const EditInvoiceForm = ({ customers, id }: EditInvoiceFormProps) => {
  const [status, setStatus] = useState('pending');
  const [selectedCustomer, setSelectedCustomer] = useState(id ?? '');
  const { customer } = useGetCustomerById(selectedCustomer);

  useEffect(() => {
    setStatus(customer?.isPaid ? 'paid' : 'pending');
  }, [customer]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Update a invoice for the customer in DB
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="customers" className="mb-2 block text-sm font-medium text-gray-900">
            Choose customer
          </label>
          <div className="relative">
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            <select
              id="customers"
              value={selectedCustomer}
              onChange={(e) => setSelectedCustomer(e.target.value)}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            >
              <option disabled>Select a customer</option>

              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.customerName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-900">Choose an amount</label>
          <div className="relative">
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            <input
              type="number"
              id="amount"
              value={customer?.amount || ''}
              step={0.01}
              aria-describedby="helper-text-explanation"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Enter USD amount"
              required
            />
          </div>
        </div>
        <fieldset className="mb-4">
          <legend className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Set the invoice status
          </legend>
          <div className="flex gap-4 rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="pending"
                name="status"
                value="pending"
                checked={status === 'pending'}
              />
              <label htmlFor="pending">
                <StatusButton isPaid={false} />
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="paid"
                name="status"
                value="paid"
                checked={status === 'paid'}
              />
              <label htmlFor="paid">
                <StatusButton isPaid={true} />
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-4 flex justify-end gap-3">
        <Link
          to="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          Edit Invoice
        </button>
      </div>
    </form>
  );
};

export default EditInvoiceForm;
