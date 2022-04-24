// import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/auth-hook'
import Auth from "./../pages/auth/Auth";

const RequireAuth = () => {
    const {token} = useAuth()
    const location = useLocation()

    // return (
    //     token ? <Outlet/> : <Navigate to='auth' state={{ from: location}} replace/>
    // );

//     if (!token) {
//     // Redirect them to the /login page, but save the current location they were
//     // trying to go to when they were redirected. This allows us to send them
//     // along to that page after they login, which is a nicer user experience
//     // than dropping them off on the home page.
//     return <Navigate to="/auth" state={{ from: location }} replace />;
//   }

//   return children;

    return token ? <Outlet/> : <Auth/>
}

export default RequireAuth