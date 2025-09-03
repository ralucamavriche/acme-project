import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('renders Hello World heading', () => {
    render(<App />);
    expect(screen.getByText(/Hello World/i)).not.toBeNull();
  });
});
