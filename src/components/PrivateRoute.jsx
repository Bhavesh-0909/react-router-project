import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({IsLoggedIn, children}) => {
  if(IsLoggedIn){
    return children;
  }
  else{
    return <Navigate to="/login"/>
  }
}
