import { BrowserRouter as Router } from 'react-router-dom';

import {AuthContext} from './context/auth/Auth-context'
import {useAuth} from './hooks/auth-hook'

import AppRoutes from './routes';
import Navbar from './components/shared/navigation/MainNavigation/Navbar';
import {GlobalStyle} from './styles/globalStyle'

const App: React.FC = () => {
  const { token, login, logout, userId, name } = useAuth();

  return (
    <Router>
      <GlobalStyle/>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          name: name,
          login: login,
          logout: logout,
          userId: userId,
        }}
      >
      <Navbar />
      <AppRoutes />
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
