import { Link } from 'react-router-dom';
import type { Customer, CustomerDataProps } from '../../../types';
import { formatCurrency } from '../../../utils/formatCurrency';
import { formatDate } from '../../../utils/formatDate/formatDate';
import ActionButton from '../../Button/ActionButton';
import StatusButton from '../../Button/StatusButton';

const CustomerMobileCardSkeleton = () => {
  return Array.from({ length: 5 }).map((_, index) => (
    <div key={index} className="mb-2 w-full animate-pulse rounded-lg bg-white p-4">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded bg-gray-200" />
          </div>
          <div className="h-4 w-32 rounded bg-gray-200" />
        </div>
        <div>
          <div className="h-6 w-12 rounded bg-gray-200" />
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="flex flex-col">
          <div className="h-4 w-16 rounded bg-gray-200" />
          <div className="mt-2 h-4 w-24 rounded bg-gray-200" />
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-200" />
          <div className="bg-gray -200 h-6 w-6 rounded-full" />
        </div>
      </div>
    </div>
  ));
};

const CustomerMobileCard = ({ customers, loading }: CustomerDataProps) => {
  return (
    <div className="md:hidden">
      {loading ? (
        <CustomerMobileCardSkeleton />
      ) : (
        customers.map((person: Customer) => {
          const { id, customerAvatar, customerName, customerEmail, amount, createdAt, isPaid } =
            person;
          return (
            <div key={id} className="mb-2 w-full rounded-lg bg-white p-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex flex-col">
                  <div className="mb-2 flex items-center">
                    <img
                      className="mr-2 h-8 w-8 rounded-full"
                      src={customerAvatar}
                      alt={`${customerName}'s profile picture`}
                    />
                    <p>{customerName}</p>
                  </div>
                  <p className="text-sm text-gray-500">{customerEmail}</p>
                </div>
                <div>
                  <StatusButton isPaid={isPaid} />
                </div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div className="flex flex-col">
                  <p className="text-lg font-medium">{formatCurrency(amount)}</p>
                  <p>{formatDate(new Date(createdAt))}</p>
                </div>
                <div className="flex justify-end gap-2">
                  <Link to={`/dashboard/invoices/${id}/edit`}>
                    <ActionButton action="update" />
                  </Link>
                  <ActionButton action="delete" />
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CustomerMobileCard;
