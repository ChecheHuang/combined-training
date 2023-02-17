import { lazy, Suspense } from 'react'
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
const Register = lazy(() => import('./pages/Register'))
const User = lazy(() => import('./pages/User'))
const Command = lazy(() => import('./pages/User/Command'))
const Edit = lazy(() => import('./pages/User/Edit'))
const withLoadingComponent = (comp) => (
  <Suspense fallback={<div>Loading</div>}>{comp}</Suspense>
)
function App() {
  const routes = [
    { path: '/', element: <Navigate to="/login" /> },
    {
      path: '/',
      element: <Home />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: withLoadingComponent(<Register />) },
        {
          path: 'user',
          element: withLoadingComponent(<User />),
          children: [
            {
              path: 'command',
              element: withLoadingComponent(<Command />),
            },
            {
              path: 'edit',
              element: withLoadingComponent(<Edit />),
            },
          ],
        },
      ],
    },
  ]
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

export default App
