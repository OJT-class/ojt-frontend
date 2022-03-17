import { Route, Routes } from 'react-router-dom';

import Landing from './components/main/Landing';
import Login from './components/auth/Login';
import TodosList from './components/todos/TodosList';
import TodoCreate from './components/todos/TodoCreate';
import TodoEdit from './components/todos/TodoEdit';
import TodoDelete from './components/todos/TodoDelete';
import MainBar from './components/main/MainBar';
import UserInfo from './components/main/UserInfo';

const AppRoutes = () => {
   return (
     <Routes>
       <Route path="/" element={<Landing />} />
       <Route path="/auth" element={<Login />} />
       <Route
         path="/todos"
         element={
           <>
             <MainBar />
             <TodosList />
             <TodoCreate />
           </>
         }
       />
       <Route
         path="/todos/:id"
         element={
           <>
             <TodoEdit />
             <TodoDelete />
           </>
         }
       />
       <Route path="/user-info/:id" element={<UserInfo />} />
     </Routes>
   );
}

export default AppRoutes;