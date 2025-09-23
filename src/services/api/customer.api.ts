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
