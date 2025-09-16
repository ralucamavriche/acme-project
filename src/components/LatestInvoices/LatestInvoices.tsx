import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { formatCurrency } from '../../utils/formatCurrency';
import { getTimeDifference } from '../../utils/getTimeDifference';

type Person = {
  id: number;
  name: string;
  email: string;
  amount: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

const latestInvoices: Person[] = [
  {
    id: 1,
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    amount: 234400,
    imageUrl: '/customers/delba-de-oliveira.png',
    createdAt: '2025-08-15T12:00:00Z',
    updatedAt: '2025-09-16T12:00:00Z',
  },
  {
    id: 2,
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    amount: 5000,
    imageUrl: '/customers/delba-de-oliveira.png',
    createdAt: '2024-09-20T12:00:00Z',
    updatedAt: '2024-09-20T12:00:00Z',
  },
  {
    id: 3,
    name: 'Balazs Orban',
    email: 'balazs.orban@example.com',
    amount: 34577,
    imageUrl: '/customers/balazs-orban.png',
    createdAt: '2024-09-20T12:00:00Z',
    updatedAt: '2024-09-20T12:00:00Z',
  },
  {
    id: 4,
    name: 'Lee Robinson',
    email: 'lee.robinson@example.com',
    amount: 54246,
    imageUrl: '/customers/lee-robinson.png',
    createdAt: '2024-09-20T12:00:00Z',
    updatedAt: '2024-09-20T12:00:00Z',
  },
  {
    id: 5,
    name: 'Evil Rabbit',
    email: 'evil.rabbit@example.com',
    amount: 666,
    imageUrl: '/customers/evil-rabbit.png',
    createdAt: '2024-09-20T12:00:00Z',
    updatedAt: '2024-09-20T12:00:00Z',
  },
];

const LatestInvoices = () => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-4 text-xl md:text-2xl">Latest Invoices</h1>
      <div className="flex h-full flex-col rounded-lg bg-gray-50 p-4 shadow-sm">
        <div className="flex grow flex-col justify-between bg-white px-6">
          {latestInvoices.map((person) => {
            const { id, imageUrl, name, email, amount } = person;
            return (
              <div
                key={id}
                className="flex flex-row items-center justify-between border-t py-4 first:border-t-0"
              >
                <div className="flex items-center">
                  <img
                    className="mr-4 h-8 w-8 rounded-full"
                    src={imageUrl}
                    alt={`${name}'s profile picture`}
                  />
                  <div className="min-w-0">
                    <span className="truncate text-sm font-semibold md:text-base">{name}</span>
                    <span className="hidden truncate text-sm text-gray-500 sm:block">{email}</span>
                  </div>
                </div>
                <span className="truncate text-sm font-medium md:text-base">
                  {formatCurrency(amount)}
                </span>
              </div>
            );
          })}
        </div>
        {latestInvoices?.[0]?.updatedAt ? (
          <div className="flex items-center pb-2 pt-8">
            <ArrowPathIcon className="h-5 w-5 text-gray-500" />
            <p className="text-md ml-2 text-gray-500">
              Updated {''} {getTimeDifference(latestInvoices[0].updatedAt)}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LatestInvoices;
