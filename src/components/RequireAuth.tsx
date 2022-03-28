// import React from 'react'
import { useAuth } from '../hooks/auth-hook'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({children}: any) => {
    const {token} = useAuth()

    if (!token) {
        return <Navigate to='/auth'/>
    } else {
        return children
    }
}

export default RequireAuth