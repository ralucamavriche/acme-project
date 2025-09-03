import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Home from './Home';

describe('Home', () => {
  it('renders Home Page heading', () => {
    render(<Home />);
    expect(screen.getByText('Home Page')).not.toBeNull();
  });
});
