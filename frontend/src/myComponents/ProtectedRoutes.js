import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
// import { useSelector } from 'react-redux/es/exports'

const ProtectedRoutes = () => {

    // const userLoginStatus = useSelector((state) => state.userStatus)
    // const adminStatus = useSelector((state) => state.adminStatus)
  return (
    // userLoginStatus  && !adminStatus ? <Outlet/> : 
    // (userLoginStatus?<Navigate to="/admin"/>:<Navigate to="/"/>)
    <Outlet />
  )
}

export default ProtectedRoutes