import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Protected from './components/Protected.jsx';
import UserTable from './components/ui/UserTable.jsx';
import CategoryTable from './components/ui/product-additionals/CategoryTable.jsx';
import CategoryForm from './components/ui/product-additionals/CategoryForm.jsx';
import UserForm from './components/ui/UserForm.jsx';
import RoleTable from './components/ui/RoleTable.jsx';
import RoleForm from './components/ui/RoleForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected />,
    children: [
      {
        path: "users-table",
        element: <UserTable />
      },

      {
        path: "users-table/user-form",
        element: <UserForm />
      },
      
      {
        path: "roles-table",
        element: <RoleTable />
      },
      {
        path: "roles-table/role-form",
        element: <RoleForm />
      },
      {
        path: "category-table",
        element: <CategoryTable />
      },
      {
        path: "category-table/category-form",
        element: <CategoryForm />
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
