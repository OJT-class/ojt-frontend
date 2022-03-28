import { Route, Routes, Navigate } from 'react-router-dom';

import {useAuth} from './hooks/auth-hook'

import Auth from './pages/auth/Auth';
import TodosPage from './pages/todos/TodosPage';
import UpdateTodo from './pages/update-todo/UpdateTodo';
import UserInfo from './pages/user-info/UserInfo';

const AppRoutes: React.FC = () => {
  const { token } = useAuth();
  console.log("🚀 ~ file: routes.tsx ~ line 12 ~ token", token)

   return (
     <Routes>
       <Route path="/auth" element={<Auth />} />
       <Route path="/" element={token ? <TodosPage /> : <Navigate to="/auth"/>} />
       <Route path="/:todoid/update" element={<UpdateTodo />} />
       {/* <Route path="/user-info/:id" element={<UserInfo />} /> */}
       <Route path="/user-info/:id" element={token ? <UserInfo /> : <Navigate to="/auth"/>} />
     </Routes>
   );
}

export default AppRoutes;