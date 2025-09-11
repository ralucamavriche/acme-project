import { BanknotesIcon, ClockIcon, InboxIcon } from '@heroicons/react/24/outline';
import React from 'react';

type CardProps = {
  title: string;
  amount: string;
  Icon: React.ElementType;
};

const statsData: Array<CardProps> = [
  {
    title: 'Collected',
    amount: '$2,947.26',
    Icon: BanknotesIcon,
  },
  {
    title: 'Pending',
    amount: '$1,256.32',
    Icon: ClockIcon,
  },
  {
    title: 'Total Invoices',
    amount: '13',
    Icon: InboxIcon,
  },
  {
    title: 'Total Customers',
    amount: '6',
    Icon: BanknotesIcon,
  },
];

const Card: React.FC<CardProps> = ({ title, amount, Icon: Icon }) => {
  return (
    <div key={title} className="rounded-xl bg-gray-50 p-2">
      <div className="flex p-4">
        <Icon className="text-gray-70 h-5 w-5" />
        <h1 className="ml-2 font-medium">{title}</h1>
      </div>
      <h1 className="rounded-xl bg-white px-4 py-8 text-center text-2xl">{amount}</h1>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map(({ title, amount, Icon: Icon }) => (
        <Card key={title} title={title} amount={amount} Icon={Icon} />
      ))}
    </div>
  );
};

export default Stats;
