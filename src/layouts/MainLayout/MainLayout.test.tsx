import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import MainLayout from './MainLayout';

describe('MainLayout', () => {
  it('renders children', () => {
    render(
      <MainLayout>
        <div>Content</div>
      </MainLayout>,
    );
    expect(screen.getByText('Content')).not.toBeNull();
  });
});
