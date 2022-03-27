import { Route, Routes } from 'react-router-dom';

import {useAuth} from './hooks/auth-hook'
import {AuthContext} from './context/auth/Auth-context'

import Auth from './pages/auth/Auth';
import TodosPage from './pages/todos/TodosPage';
import UpdateTodo from './pages/update-todo/UpdateTodo';
import UserInfo from './pages/user-info/UserInfo';

const AppRoutes: React.FC = () => {
  const { token, login, logout, userId, name } = useAuth();

   return (
     <Routes>
       <Route path="/" element={token ? <TodosPage /> : <Auth/>} />
       <Route path="/auth" element={<Auth />} />
       <Route path="/:todoid/update" element={<UpdateTodo />} />
       <Route path="/user-info/:id" element={<UserInfo />} />
     </Routes>
   );
}

export default AppRoutes;