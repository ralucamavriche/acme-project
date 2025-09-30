import type { Customer } from '../types';
export const sampleCustomers: Customer[] = [
  {
    id: '1',
    customerAvatar: 'https://i.pravatar.cc/150?img=1',
    customerName: 'John Doe',
    customerEmail: 'john.doe@example.com',
    isPaid: true,
    amount: '2500',
    createdAt: '2023-10-01T10:00:00Z',
    updatedAt: '2023-10-01T10:00:00Z',
  },
  {
    id: '2',
    customerAvatar: 'https://i.pravatar.cc/150?img=2',
    customerName: 'Jane Smith',
    customerEmail: 'jane.smith@example.com',
    isPaid: false,
    amount: '1500',
    createdAt: '2023-10-02T11:30:00Z',
    updatedAt: '2023-10-02T11:30:00Z',
  },
  {
    id: '3',
    customerAvatar: 'https://i.pravatar.cc/150?img=3',
    customerName: 'Jim Brown',
    customerEmail: 'jim.brown@example.com',
    isPaid: false,
    amount: '1500',
    createdAt: '2023-10-02T11:30:00Z',
    updatedAt: '2023-10-02T11:30:00Z',
  },
];
