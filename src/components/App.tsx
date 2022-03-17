import { BrowserRouter as Router } from 'react-router-dom';
import '../scss/App.scss';

import AppRoutes from '../routes';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
