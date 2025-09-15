import { ArrowPathIcon } from '@heroicons/react/24/outline';

type Person = {
  id: number;
  name: string;
  email: string;
  amount: string;
  imageUrl: string;
};

const latestInvoices: Person[] = [
  {
    id: 1,
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    amount: '$2,344.00',
    imageUrl: '/customers/delba-de-oliveira.png',
  },
  {
    id: 2,
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    amount: '$50.00',
    imageUrl: '/customers/delba-de-oliveira.png',
  },
  {
    id: 3,
    name: 'Balazs Orban',
    email: 'balazs.orban@example.com',
    amount: '$345.77',
    imageUrl: '/customers/balazs-orban.png',
  },
  {
    id: 4,
    name: 'Lee Robinson',
    email: 'lee.robinson@example.com',
    amount: '$542.46',
    imageUrl: '/customers/lee-robinson.png',
  },
  {
    id: 5,
    name: 'Evil Rabbit',
    email: 'evil.rabbit@example.com',
    amount: '$6.66',
    imageUrl: '/customers/evil-rabbit.png',
  },
];

const LatestInvoices = () => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-4 font-lusitana text-xl md:text-2xl">Latest Invoices</h1>
      <div className="flex h-full flex-col rounded-lg bg-gray-50 p-4 shadow-sm">
        <div className="flex grow flex-col justify-between bg-white px-6">
          {latestInvoices.map((person) => (
            <div
              key={person.id}
              className="flex flex-row items-center justify-between border-t py-4 first:border-t-0"
            >
              <div className="flex items-center">
                <img
                  className="mr-4 h-8 w-8 rounded-full"
                  src={person.imageUrl}
                  alt={`${person.name}'s profile picture`}
                />
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold md:text-base">{person.name}</h3>
                  <h3 className="hidden truncate text-sm text-gray-500 sm:block">{person.email}</h3>
                </div>
              </div>
              <h3 className="truncate text-sm font-medium md:text-base">{person.amount}</h3>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-8">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h2 className="ml-2 text-sm text-gray-500">Updated just now</h2>
        </div>
      </div>
    </div>
  );
};

export default LatestInvoices;
