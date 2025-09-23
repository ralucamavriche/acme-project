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

export interface CustomerDataProps {
  customers: Customer[];
}

export interface IError {
  error: string;
  code: number;
}
