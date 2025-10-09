import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should call the handleSearch callback when typing', async () => {
    const user = userEvent.setup();
    const mockHandleSearch = vi.fn();

    render(<SearchBar search="" handleSearch={mockHandleSearch} />);

    const input = screen.getByRole('textbox', { name: /search/i });
    await user.type(input, 'Bob');

    await waitFor(() => expect(mockHandleSearch).toHaveBeenCalledTimes(1), {
      timeout: 300,
    });
  });
});
