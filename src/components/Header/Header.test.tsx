import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Header from './Header';

describe('Header', () => {
  it('renders correctly the text', () => {
    render(<Header />);
    expect(screen.getByText('Acme')).toBeInTheDocument();
  });

  it('renders correctly the icon', () => {
    render(<Header />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});
