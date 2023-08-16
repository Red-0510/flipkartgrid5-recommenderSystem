import SoftBox from 'components/SoftBox'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Header from 'layouts/profile/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MyLayout() {
    console.log("layout")
  return (
    <SoftBox>
        {/* <DashboardNavbar /> */}
        <Header />
        <SoftBox sx={{margin:"3rem"}}>
          <Outlet />
        </SoftBox>
    </SoftBox>
  )
}
