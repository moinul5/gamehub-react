import React, { use } from 'react'
import {AuthContext} from '../Contexts/AuthContext'
import Loader from '../components/Loader'
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({children}) {
    const {user, loading} = use(AuthContext) 
    const location = useLocation();

    if(loading)
    {
        return <Loader></Loader>
    }

    if(!user) {
      return (
        <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
      )
    }
  return children
    
  
}

export default PrivateRoute