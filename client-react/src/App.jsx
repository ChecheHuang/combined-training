import React, { lazy, Suspense } from 'react'
import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
import Command from './pages/User/Command'
import Edit from './pages/User/Edit'
const Register = lazy(() => import('./pages/Register'))
// const User = lazy(() => import('./pages/User'))
// const Command = lazy(() => import('./pages/User/Command'))
// const Edit = lazy(() => import('./pages/User/Edit'))
const withLoadingComponent = (comp) => (
  <Suspense fallback={<div>Loading</div>}>{comp}</Suspense>
)
function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Home />}>
        <Route index element={<div>Home</div>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={withLoadingComponent(<Register />)} />
        <Route path="user" element={<User />}>
          <Route index element={<div>user</div>} />
          <Route path="command" element={withLoadingComponent(<Command />)} />
          <Route path="edit" element={withLoadingComponent(<Edit />)} />
        </Route>
      </Route>
    )
  )
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<div>Home</div>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={withLoadingComponent(<Register />)} />
          <Route path="user" element={<User />}>
            <Route index element={<div>user</div>} />
            <Route path="command" element={withLoadingComponent(<Command />)} />
            <Route path="edit" element={withLoadingComponent(<Edit />)} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />,
  //     children: [
  //       { path: '/', element: <div>Home</div> },
  //       { path: '/register', element: <Register /> },
  //       { path: '/login', element: <Login /> },
  //       {
  //         path: '/user',
  //         element: <User />,
  //         children: [
  //           { path: '/command', element: <Command /> },
  //           { path: '/edit', element: <Edit /> },
  //         ],
  //       },
  //     ],
  //   },
  // ])

  return <RouterProvider router={router} />
}

export default App
