import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Header from './Header';

describe('Header', () => {
  it('renders the text correctly', () => {
    render(<Header />);
    expect(screen.getByText('Acme')).toBeInTheDocument();
  });

  it('renders the icon correctly', () => {
    render(<Header />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});
