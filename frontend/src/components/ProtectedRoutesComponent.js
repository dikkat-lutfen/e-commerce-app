import React from 'react'
import {Outlet, Navigate} from "react-router-dom"

// This component will check if user is loged in or not
// outlet will lead us everychild routes under ProtectedRouteComponent
//Navigate send us even we do not press any where

function ProtectedRouteComponent() {
    const auth = false;
  return (
    <div>
      {auth? <Outlet/> : <Navigate to="/login" />}
    </div>
  )
}

export default ProtectedRouteComponent
