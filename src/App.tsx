import { BrowserRouter as Router } from 'react-router-dom';
import {GlobalStyle} from './styles/globalStyle'
import AppRoutes from './routes';
import Navbar from './components/shared/navigation/MainNavigation/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
