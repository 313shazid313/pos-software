import store from "./redux/store.js";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Protected from "./components/Protected.jsx";
import UserTable from "./components/ui/UserTable.jsx";
import CategoryTable from "./components/ui/product-additionals/CategoryTable.jsx";
import CategoryForm from "./components/ui/product-additionals/CategoryForm.jsx";
import UserForm from "./components/ui/UserForm.jsx";
import RoleTable from "./components/ui/RoleTable.jsx";
import RoleForm from "./components/ui/RoleForm.jsx";
import OriginTable from "./components/ui/product-additionals/OriginTable.jsx";
import OriginForm from "./components/ui/product-additionals/OriginForm.jsx";
import BrandTable from "./components/ui/product-additionals/BrandTable.jsx";
import BrandForm from "./components/ui/product-additionals/BrandForm.jsx";
import TypeTable from "./components/ui/product-additionals/TypeTable.jsx";
import TypeForm from "./components/ui/product-additionals/TypeForm.jsx";
import UnitTable from "./components/ui/product-additionals/UnitTable.jsx";
import UnitForm from "./components/ui/product-additionals/UnitForm.jsx";
import NotFound404 from "./components/ui/NotFound404.jsx";
import ProductForm from "./components/ui/ProductForm.jsx";
import ProductTable from "./components/ui/ProductTable.jsx";

import CategoryUpdate from "./components/ui/product-additionals/CategoryUpdate.jsx";
import OriginUpdate from "./components/ui/product-additionals/OriginUpdate.jsx";
import BrandUpdate from "./components/ui/product-additionals/BrandUpdate.jsx";
import UnitUpdate from "./components/ui/product-additionals/UnitUpdate.jsx";
import TypeUpdate from "./components/ui/product-additionals/TypeUpdate.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Protected />,
      children: [
        {
          path: "users-table",
          element: <UserTable />,
        },
        {
          path: "users-table/user-form",
          element: <UserForm />,
        },

        {
          path: "roles-table",
          element: <RoleTable />,
        },
        {
          path: "roles-table/role-form",
          element: <RoleForm />,
        },


        {
          path: "category-table",
          element: <CategoryTable />,
        },
        {
          path: "category-table/category-form",
          element: <CategoryForm />,
        },
        {
          path: "category-table/category-update/:id",
          element: <CategoryUpdate />,
        },


        {
          path: "origin-table",
          element: <OriginTable />,
        },
        {
          path: "origin-table/origin-form",
          element: <OriginForm />,
        },
        {
          path: "origin-table/origin-update/:id",
          element: <OriginUpdate />,
        },



        {
          path: "brand-table",
          element: <BrandTable />,
        },
        {
          path: "brand-table/brand-form",
          element: <BrandForm />,
        },
        {
          path: "brand-table/brand-update/:id",
          element: <BrandUpdate />,
        },



        {
          path: "type-table",
          element: <TypeTable />,
        },
        {
          path: "type-table/type-form",
          element: <TypeForm />,
        },
        {
          path: "type-table/type-update/:id",
          element: <TypeUpdate />,
        },



        {
          path: "unit-table",
          element: <UnitTable />,
        },
        {
          path: "unit-table/unit-form",
          element: <UnitForm />,
        },
        {
          path: "unit-table/unit-update/:id",
          element: <UnitUpdate />,
        },


        
        {
          path: "product-table",
          element: <ProductTable />,
        },
        {
          path: "product-table/product-form",
          element: <ProductForm />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound404 />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  </Provider>
);
