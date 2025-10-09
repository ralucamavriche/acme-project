import { Link } from 'react-router-dom';
import type { Customer, CustomerDataProps } from '../../../types';
import { formatCurrency } from '../../../utils/formatCurrency';
import { formatDate } from '../../../utils/formatDate/formatDate';
import ActionButton from '../../Button/ActionButton';
import StatusButton from '../../Button/StatusButton';

const CustomerDesktopCardSkeleton = () => {
  return (
    <tbody className="bg-white p-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <tr key={index} className="border-t first:border-t-0">
          <td className="items-center whitespace-nowrap py-3 pl-6 pr-3">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
            </div>
          </td>
          <td className="whitespace-nowrap">
            <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
          </td>
          <td className="whitespace-nowrap text-sm">
            <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
          </td>
          <td className="whitespace-nowrap text-sm">
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
          </td>
          <td className="whitespace-nowrap">
            <div className="h-6 w-12 animate-pulse rounded bg-gray-200" />
          </td>
          <td className="flex justify-end gap-2 whitespace-nowrap p-4 text-gray-500">
            <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200" />
            <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const CustomerDesktopCard = ({ customers, loading }: CustomerDataProps) => {
  return (
    <table className="hidden w-full md:table">
      <thead className="hidden text-left text-sm font-normal md:table-header-group">
        <tr>
          <th scope="col" className="px-4 py-5 font-medium">
            Customer
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Email
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Amount
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Date
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Status
          </th>
          <th scope="col" className="px-3 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>

      {loading ? (
        <CustomerDesktopCardSkeleton />
      ) : (
        <tbody className="bg-white p-4">
          {customers.map((person: Customer) => {
            const { id, customerAvatar, customerName, customerEmail, amount, createdAt, isPaid } =
              person;
            return (
              <tr key={id} className="border-t first:border-t-0">
                <td className="items-center whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <img
                      className="h-7 w-7 rounded-full"
                      src={customerAvatar}
                      alt={`${customerName}'s profile picture`}
                    />
                    <span className="truncate text-sm">{customerName}</span>
                  </div>
                </td>
                <td className="whitespace-nowrap">
                  <span className="truncate text-sm">{customerEmail}</span>
                </td>
                <td className="whitespace-nowrap text-sm">{formatCurrency(amount)}</td>
                <td className="whitespace-nowrap text-sm">{formatDate(new Date(createdAt))}</td>
                <td className="whitespace-nowrap">
                  <StatusButton isPaid={isPaid} />
                </td>
                <td className="flex justify-end gap-2 whitespace-nowrap p-4 text-gray-500">
                  <Link to={`/dashboard/invoices/${id}/edit`}>
                    <ActionButton action="update" />
                  </Link>
                  <ActionButton action="delete" />
                </td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};

export default CustomerDesktopCard;
