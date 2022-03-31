import { Route, Routes, Navigate } from 'react-router-dom';

import RequireAuth from './components/RequireAuth';
import {useAuth} from './hooks/auth-hook'

import Auth from './pages/auth/Auth';
import TodosPage from './pages/todos/TodosPage';
import UpdateTodo from './pages/update-todo/UpdateTodo';
import UserInfo from './pages/user-info/UserInfo';

const AppRoutes = () => {
  const { token } = useAuth();



   return (
     <Routes>
       {/* <Route path="/" element={token ? <TodosPage /> : <Navigate to="/auth"/>} /> */}

       {/* Public Routes: */}
       <Route path="/auth" element={<Auth />} />

       <Route element={<RequireAuth/>}>
       {/* Protected Routes: */}
       {/* <Route path="/" element={<RequireAuth><TodosPage/></RequireAuth>} /> */}
         <Route path='/' element={<TodosPage/>}/>
       <Route path="/:todoid/update" element={<UpdateTodo />} />
       <Route path="user-info/:id" element={<UserInfo /> } />
       </Route>
     </Routes>
   );
}

export default AppRoutes;