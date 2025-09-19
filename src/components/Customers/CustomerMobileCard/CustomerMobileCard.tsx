import { Customer, MockCustomerDataProps } from '../../../types';
import { formatCurrency } from '../../../utils/formatCurrency';
import { formatDate } from '../../../utils/formatDate/formatDate';
import ActionButton from '../../Button/ActionButton';
import StatusButton from '../../Button/StatusButton';

const CustomerMobileCard = ({ mockCustomers }: MockCustomerDataProps) => {
  return (
    <div className="md:hidden">
      {mockCustomers.map((person: Customer) => {
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
                <ActionButton action="update" />
                <ActionButton action="delete" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerMobileCard;
