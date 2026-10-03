import React, { useContext } from 'react'
import { MyStore } from '../Context/MyContext'
import { Navigate } from 'react-router';



const ProtectedRoutes = ({children}) => {
    const {isLoggedIn} = useContext(MyStore);

      if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return  children;
}

export default ProtectedRoutes
