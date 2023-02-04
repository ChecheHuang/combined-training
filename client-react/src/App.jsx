import {
  Outlet,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useRoutes,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  )
}
function Messages() {
  return (
    <div>
      <h1>messages</h1>
      <Outlet />
    </div>
  )
}

function App() {
  const routes = [
    { path: '/', element: <Navigate to="/tasks" /> },
    {
      path: '/',
      element: <Dashboard />,
      children: [
        {
          path: 'tasks',
          element: <div>tasks</div>,
        },
        {
          path: 'messages',
          element: <Messages />,
          children: [
            {
              path: 'tasks',
              element: <div>tasks</div>,
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
