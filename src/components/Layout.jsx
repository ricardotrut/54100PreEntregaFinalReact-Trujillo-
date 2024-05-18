import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout