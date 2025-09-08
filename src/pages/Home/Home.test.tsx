import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';

function LocationDisplay() {
  const location = useLocation();
  return <span data-testid="location-display">{location.pathname}</span>;
}

describe('Home', () => {
  it('renders the welcome text correctly in the Home Page', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Welcome to Acme/i)).toBeInTheDocument();
  });
  it('contains link to Next.js Learn Course', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /Next.js Learn Course/i });
    expect(link).toHaveAttribute('href', 'https://nextjs.org/learn');
  });
  it('navigste to dashbord when dashboard button is clicked', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<LocationDisplay />} />
        </Routes>
      </MemoryRouter>,
    );
    const dashboardButton = screen.getByRole('button', { name: /dashboard/i });
    await userEvent.click(dashboardButton);
    expect(screen.getByTestId('location-display')).toHaveTextContent('/dashboard');
  });
});
