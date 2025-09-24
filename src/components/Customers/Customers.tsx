import type { CustomerDataProps } from '../../types';
import CustomerDesktopCard from './CustomerDesktopCard/CustomerDesktopCard';
import CustomerMobileCard from './CustomerMobileCard/CustomerMobileCard';

const Customers = ({ customers }: CustomerDataProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-gray-50 p-2 shadow-sm">
      <CustomerMobileCard customers={customers} />
      <CustomerDesktopCard customers={customers} />
    </div>
  );
};

export default Customers;
