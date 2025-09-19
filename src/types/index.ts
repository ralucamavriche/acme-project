// Global TypeScript types
export interface Customer {
  id: string;
  customerName: string;
  customerEmail: string;
  amount: string;
  createdAt: string;
  customerAvatar: string;
  updatedAt: string;
  isPaid: boolean;
}

export interface MockCustomerDataProps {
  mockCustomers: Customer[];
}
