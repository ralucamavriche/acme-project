import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('renders AcmeLogo and home link in default variant', () => {
    render(
      <MemoryRouter>
        <Header variant="default" />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
  it('renders AcmeLogo and home link in sidebar variant', () => {
    render(
      <MemoryRouter>
        <Header variant="sidebar" />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
