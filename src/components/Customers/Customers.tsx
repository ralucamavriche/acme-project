import { MockCustomerDataProps } from '../../types';
import CustomerDesktopCard from './CustomerDesktopCard/CustomerDesktopCard';
import CustomerMobileCard from './CustomerMobileCard/CustomerMobileCard';

const Customers = ({ mockCustomers }: MockCustomerDataProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-gray-50 p-2 shadow-sm">
      <CustomerMobileCard mockCustomers={mockCustomers} />
      <CustomerDesktopCard mockCustomers={mockCustomers} />
    </div>
  );
};

export default Customers;
