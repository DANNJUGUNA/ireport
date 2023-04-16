import React from 'react'
import Navbar from './Navbar'

import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-[75vh]'>
      <Outlet/>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Layout
