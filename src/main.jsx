import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from './Home'
import Timeline from './Timeline'
import Stats from './Stats'
import Mainlayout from './layout/Mainlayout'
import FriendDetails from './FriendDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "friend/:id",
        element: <FriendDetails />,
      },
      {
        path: 'timeline',
        element: <Timeline />,
      },
      {
        path: 'stats',
        element: <Stats />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)