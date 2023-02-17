import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
function User() {
  return (
    <div className="flex">
      <aside className=" bg-secondary h-[calc(100vh-3.5rem)] w-[200px] flex flex-col  items-center  py-2 gap-1">
        <NavLink
          to="/user/edit"
          className={({ isActive }) =>
            isActive
              ? ' text-red-600 bg-white w-full text-center py-2 '
              : 'w-full text-center py-2 hover:text-red-600 hover:bg-white'
          }
        >
          修改
        </NavLink>
        <NavLink
          to="/user/command"
          className={({ isActive }) =>
            isActive
              ? ' text-red-600 bg-white w-full text-center py-2 '
              : 'w-full text-center py-2 hover:text-red-600 hover:bg-white'
          }
        >
          評論
        </NavLink>
      </aside>
      <div className=" flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default User
