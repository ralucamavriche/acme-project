import type { CustomerDataProps } from '../../types';
import CustomerDesktopCard from './CustomerDesktopCard/CustomerDesktopCard';
import CustomerMobileCard from './CustomerMobileCard/CustomerMobileCard';

const Customers = ({ customers, loading }: CustomerDataProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-gray-50 p-2 shadow-sm">
      <CustomerMobileCard loading={loading} customers={customers} />
      <CustomerDesktopCard loading={loading} customers={customers} />
    </div>
  );
};

export default Customers;
