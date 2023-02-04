import {
  Outlet,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import User from './pages/User'
import Command from './pages/User/Command'
import Edit from './pages/User/Edit'

function App() {
  const routes = [
    { path: '/', element: <Navigate to="/tasks" /> },
    {
      path: '/',
      element: <Home />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        {
          path: 'user',
          element: <User />,
          children: [
            {
              path: 'command',
              element: <Command />,
            },
            {
              path: 'edit',
              element: <Edit />,
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
