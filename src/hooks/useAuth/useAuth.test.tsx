import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useAuth } from './useAuth';

import type { JSX } from 'react';

const TestComponent = (): JSX.Element => {
  const { user, login, logout } = useAuth();
  return (
    <div>
      <span data-testid="user">{user}</span>
      <button onClick={() => login('user')}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

describe('useAuth', () => {
  it('should login and logout', () => {
    render(<TestComponent />);
    const userSpan = screen.getByTestId('user');
    expect(userSpan.textContent).toBe('');
    act(() => {
      fireEvent.click(screen.getByText('Login'));
    });
    expect(userSpan.textContent).toBe('user');
    act(() => {
      fireEvent.click(screen.getByText('Logout'));
    });
    expect(userSpan.textContent).toBe('');
  });
});
