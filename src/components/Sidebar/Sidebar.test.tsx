import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Invoices/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Customers/i })).toBeInTheDocument();
  });
  it('renders sign out link', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /Sign Out/i })).toBeInTheDocument();
  });
});
