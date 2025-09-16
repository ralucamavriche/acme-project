import { BanknotesIcon, ClockIcon, InboxIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { formatCurrency } from '../../utils/formatCurrency';

type CardProps = {
  title: string;
  amount?: number;
  value?: number;
  Icon: React.ElementType;
};

const statsData: Array<CardProps> = [
  {
    title: 'Collected',
    amount: 294726,
    Icon: BanknotesIcon,
  },
  {
    title: 'Pending',
    amount: 125632,
    Icon: ClockIcon,
  },
  {
    title: 'Total Invoices',
    value: 13,
    Icon: InboxIcon,
  },
  {
    title: 'Total Customers',
    value: 6,
    Icon: UserGroupIcon,
  },
];

const Card: React.FC<CardProps> = ({ title, amount, value = 0, Icon: Icon }) => {
  return (
    <div className="rounded-xl bg-gray-50 p-2">
      <div className="flex p-4">
        <Icon className="h-5 w-5 text-gray-700" />
        <h1 className="ml-2 font-medium">{title}</h1>
      </div>
      <h1 className="rounded-xl bg-white px-4 py-8 text-center text-2xl">
        {amount ? formatCurrency(amount) : value}
      </h1>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map(({ title, amount, value, Icon: Icon }) => (
        <Card key={title} title={title} amount={amount} value={value} Icon={Icon} />
      ))}
    </div>
  );
};

export default Stats;
