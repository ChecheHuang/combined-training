import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
      <header className=" h-14 bg-primary flex items-center justify-between px-6">
        <div className="w-16">
          <img src="/images/logo.png" alt="" />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default Home
