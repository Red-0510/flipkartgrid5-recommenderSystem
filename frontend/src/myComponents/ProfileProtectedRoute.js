import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
import { useSelector } from 'react-redux/es/exports'
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

const ProfileProtectedRoute = () => {
  
    // const isUserRegistered = useSelector((state) => state.userCredentials.isRegistered);
    const userLoginStatus = useSelector((state) => state.userStatus)
    // const adminStatus  = useSelector((state) => state.adminStatus)
    const userId = Cookies.get("token")?jwt_decode(Cookies.get("token")):{}

  return (
    !userLoginStatus  ? <Outlet/> : <Navigate to={`/profile/${userId.id}`}/>
  )
}

export default ProfileProtectedRoute