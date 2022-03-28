import { createContext } from 'react';

interface AuthContextInterface {
  isLoggedIn: boolean
  name: string | null;
  userId: string | null;
  token: string | null | boolean;
  login: any;
  logout: any
}

export const AuthContext = createContext<AuthContextInterface>({
  isLoggedIn: false,
  name: null,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
});
