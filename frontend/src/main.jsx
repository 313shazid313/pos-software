import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Protected from './components/Protected.jsx';
import UserTable from './components/ui/UserTable.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected />,
    children: [
      {
        path: "users-table",
        element: <UserTable/>
      },
      {
        
          path: "roles-table",
          element: <UserTable/>
        
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
