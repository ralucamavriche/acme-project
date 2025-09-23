import { IError } from '../../types';

const GENERAL_ERROR = {
  error: 'Something went wrong!',
  code: 500,
};

const handleError = (message?: string, code?: number): IError => {
  return {
    error: message || GENERAL_ERROR.error,
    code: code || GENERAL_ERROR.code,
  };
};

export async function getAllCustomers() {
  try {
    const response = await fetch('https://68c97a0cceef5a150f650975.mockapi.io/api/v1/invoices');
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  } catch (error) {
    return handleError('Failed to fetch customers', error.code);
  }
}
