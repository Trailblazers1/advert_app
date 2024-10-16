import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function DashboardLayouts() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default DashboardLayouts