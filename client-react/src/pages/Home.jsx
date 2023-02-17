import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { toastOption } from '../utils/toastOption'
import { toast } from 'react-toastify'
function Home() {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const token = localStorage.getItem('userToken')
  useEffect(() => {
    if (token) setIsLogin(true)
    const unnecessaryLoginPath = ['/login', '/register']
    const isPathNeedLogin = !unnecessaryLoginPath.some(
      (path) => location.pathname === path
    )
    if (!isPathNeedLogin && token) {
      toast.info('已登入', toastOption)
      navigate('/user/edit')
    }
    if (isPathNeedLogin && !token) {
      toast.info('尚未登入', toastOption)
      navigate('/login')
    }
  }, [token, location.pathname, navigate])

  const handleLogout = () => {
    setIsLogin(false)
    localStorage.removeItem('userToken')
    navigate('/login')
  }
  return (
    <>
      <header className=" h-14 bg-primary flex items-center justify-between px-6">
        <div className="w-16">
          <img src="/images/logo.png" alt="" />
        </div>
        {isLogin && (
          <button
            onClick={handleLogout}
            className=" text-white border-2 border-white rounded-md py-0.5 px-4 hover:bg-white hover:text-primary "
          >
            登出
          </button>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="text-center"></footer>
    </>
  )
}

export default Home
