import { useState } from 'react';

interface Auth {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

export function useAuth(): Auth {
  const [user, setUser] = useState<string | null>(null);
  const login = (username: string): void => setUser(username);
  const logout = (): void => setUser(null);
  return { user, login, logout };
}
