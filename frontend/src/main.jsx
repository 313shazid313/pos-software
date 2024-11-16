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
import OriginTable from './components/ui/product-additionals/OriginTable.jsx';
import OriginForm from './components/ui/product-additionals/OriginForm.jsx';
import BrandTable from './components/ui/product-additionals/BrandTable.jsx';
import BrandForm from './components/ui/product-additionals/BrandForm.jsx';
import TypeTable from './components/ui/product-additionals/TypeTable.jsx';
import TypeForm from './components/ui/product-additionals/TypeForm.jsx';
import UnitTable from './components/ui/product-additionals/UnitTable.jsx';
import UnitForm from './components/ui/product-additionals/UnitForm.jsx';

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
      },
      {
        path: "origin-table",
        element: <OriginTable />
      },
      {
        path: "origin-table/origin-form",
        element: <OriginForm />
      },
      {
        path: "brand-table",
        element: <BrandTable />
      },
      {
        path: "brand-table/brand-form",
        element: <BrandForm />
      },
      {
        path: "type-table",
        element: <TypeTable />
      },
      {
        path: "type-table/type-form",
        element: <TypeForm />
      },
      {
        path: "unit-table",
        element: <UnitTable />
      },
      {
        path: "unit-table/unit-form",
        element: <UnitForm />
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
