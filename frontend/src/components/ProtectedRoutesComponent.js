import React from 'react'
import {Outlet, Navigate} from "react-router-dom"

import axios from "axios"
import {useState,useEffect} from "react"
import LoginPage from '../pages/LoginPage';

// This component will check if user is loged in or not
// outlet will lead us everychild routes under ProtectedRouteComponent
// Navigate send us even we do not press any where

function ProtectedRouteComponent({admin}) {
 
    const [isAuth, setIsAuth] = useState();


    useEffect(() => {
        axios.get("/api/get-token").then(function (data) {
            if (data.data.token) {
                setIsAuth(data.data.token);
            }
            return isAuth;
        }) 
     }, [isAuth])


    if (isAuth === undefined) return <LoginPage />;

    return isAuth && admin && isAuth !== "admin" ? 
    (<Navigate to="/login"/>) : 

    isAuth && admin ?
    (<Outlet/>) : 

    isAuth && !admin ?
    (
        <>
    
            <Outlet/>
        </>
    ) :
    (<Navigate to="/login"/>)
  
}

export default ProtectedRouteComponent
