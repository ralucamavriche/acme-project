import { BASE_URL_API } from '../../config';

export async function getAllCustomers<T>(): Promise<T | null> {
  try {
    const response = await fetch(`${BASE_URL_API}/invoices`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`, { cause: response.status });
    }
    return response.json() as T;
  } catch (error: unknown) {
    console.error('Error fetching invoices:', error);
    return null;
  }
}

export async function getTotalCustomersBySearchQuery(term: string): Promise<number> {
  try {
    const response = await fetch(`${BASE_URL_API}/invoices?search=${term}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`, { cause: response.status });
    }
    const customers = await response.json();

    return customers.length;
  } catch (error: unknown) {
    console.error(`Error fetching customer with term ${term}:`, error);
    return 0;
  }
}

export async function getCustomerById<T>(id: string): Promise<T | null> {
  try {
    const response = await fetch(`${BASE_URL_API}/invoices/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`, { cause: response.status });
    }
    return response.json() as T;
  } catch (error: unknown) {
    console.error(`Error fetching customer with id ${id}:`, error);
    return null;
  }
}

export async function getPaginatedCustomers<T>(params: URLSearchParams): Promise<T | null> {
  try {
    const response = await fetch(`${BASE_URL_API}/invoices?${params.toString()}`);
    if (response.status === 404) {
      // If no customers found, return an empty array
      return [] as unknown as T;
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`, { cause: response.status });
    }
    return response.json() as T;
  } catch (error: unknown) {
    console.error(`Error fetching customers`, error);
    return null;
  }
}
