import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('renders Home Page page by default', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Acme/i)).toBeInTheDocument();
  });
});
