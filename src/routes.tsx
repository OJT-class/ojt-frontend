import { Route, Routes } from 'react-router-dom';

import Auth from './pages/auth/Auth';
import TodosPage from './pages/todos/TodosPage';
import UpdateTodo from './pages/update-todo/UpdateTodo';
import UserInfo from './pages/user-info/UserInfo';

const AppRoutes = () => {
   return (
     <Routes>
       <Route path="/" element={<TodosPage />} />
       <Route path="/auth" element={<Auth />} />
       <Route path="/:todoid/update" element={<UpdateTodo />} />
       <Route path="/user-info/:id" element={<UserInfo />} />
     </Routes>
   );
}

export default AppRoutes;