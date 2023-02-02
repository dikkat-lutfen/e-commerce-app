import React from 'react'
import {Outlet, Navigate} from "react-router-dom"
import UserChatComponent from './user/UserChatComponent';

// This component will check if user is loged in or not
// outlet will lead us everychild routes under ProtectedRouteComponent
// Navigate send us even we do not press any where

function ProtectedRouteComponent({admin}) {
    let auth = false;
  
    if (admin){
    let adminAuth =true;
   
    return adminAuth? <Outlet/> : <Navigate to="/login"/>;
    }else{
    let userAuth =true;
   
    return userAuth? <> <Outlet/> <UserChatComponent/></> : <Navigate to="/login"/>
    }

 
    
  
}

export default ProtectedRouteComponent
