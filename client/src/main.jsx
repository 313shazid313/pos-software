import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Protected from './Protected';
import Products from '../src/components/sections/Products'

import { ThemeProvider } from "@material-tailwind/react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected />,
    children: [
      {
        path: "existing-products",
        element: <Products />,
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
