import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('renders Home Page heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Home Page/i })).toBeInTheDocument();
  });
});
