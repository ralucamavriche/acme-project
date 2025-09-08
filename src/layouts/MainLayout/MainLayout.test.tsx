import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import MainLayout from './MainLayout';

describe('MainLayout', () => {
  it('renders header, dashboard link, and footer', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Acme/i)).toBeInTheDocument();
  });
});
