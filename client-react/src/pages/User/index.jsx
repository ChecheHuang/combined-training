import React from 'react'
import { Outlet } from 'react-router-dom'
function User() {
  return (
    <div>
      <aside>user</aside>
      <Outlet />
    </div>
  )
}

export default User
