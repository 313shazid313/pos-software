import Loading from "../Loading";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  useGetAllProductsQuery,
  useDeleteaProductMutation,
  useSearchProductsQuery,
} from "../../redux/services/productsApi";


//icons
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

const ProductTable = () => {
  // ? hooks for pagination ------->
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  // ? hooks for pagination ------->

  //? code for delete----------
  const { data, refetch, isLoading } = useGetAllProductsQuery({
    page: pageNumber,
  });
  const [deleteaProduct] = useDeleteaProductMutation();

  const handleProductDelete = async (productId) => {
    try {
      if (confirm("Sure You want to delete Product ???")) {
        await deleteaProduct(productId);
        refetch();
      }
    } catch (error) {
      console.error("Failed to delete the product:", error);
    }
  };
  //? code for delete-----------

  // ?pagination ------->
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  const gotoPrevious = () => {
    setPageNumber((prev) => Math.max(0, prev - 1));
  };

  const gotoNext = () => {
    setPageNumber((prev) => Math.min(numberOfPages - 1, prev + 1));
  };

  useEffect(() => {
    if (data) {
      setNumberOfPages(data?.totalPage || 0);
      setProducts(data?.allProducts || 0);
    }
  }, [data]);
  //? pagination------>

  // ?search utility -----------
  const [searchQuery, setSearchQuery] = useState("");
  const { data: searchData } = useSearchProductsQuery(searchQuery);

  // console.log(searchData);
  console.log(searchQuery);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <p className="text-2xl py-4 text-center">Manage Products</p>
      <div className="flex justify-between">
        <div>
          {/* seaarch bar */}
          <div className="flex items-center max-w-sm mx-auto">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search with name..."
                required
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* new item */}
        <div>
          <Link
            to="product-form"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add +
            </span>
          </Link>
        </div>
      </div>

      {searchQuery == [] ? (
        <div>
          {/* table  */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Index
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Brand
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sell Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    VAT
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sell Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {products?.map((item, index) => (
                  <tr
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    key={item.id}
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">
                      {item.ProductBrand?.brandName}
                    </td>
                    <td className="px-6 py-4">
                      {item.ProductCategory?.categoryName}
                    </td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">{item.ProductType?.TypeName}</td>
                    <td className="px-6 py-4">{item.ProductUnit?.UnitName}</td>
                    <td className="px-6 py-4">{item.vat}</td>
                    <td className="px-6 py-4">{item.sellType}</td>
                    <td className="px-6 py-4 flex space-x-2">
                      <div className="flex flex-row ">
                        <button onClick={() => handleProductDelete(item.id)}>
                          <MdDeleteSweep className="text-2xl text-red-700 m-4" />
                        </button>
                        <Link to={`product-update/${item.id}`}>
                          <FaEdit className="text-xl text-blue-500 m-4" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* pagination */}
          <div className="flex justify-between mt-6">
            <button
              onClick={gotoPrevious}
              disabled={pageNumber === 0}
              className={`px-4 py-2 rounded-lg ${
                pageNumber === 0
                  ? "bg-gray-300 text-gray-600"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Previous
            </button>

            <div className="flex space-x-2">
              {pages.map((pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => setPageNumber(pageIndex)}
                  className={`px-4 py-2 ${
                    pageIndex === pageNumber
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } rounded-lg`}
                >
                  {pageIndex + 1}
                </button>
              ))}
            </div>

            <button
              onClick={gotoNext}
              disabled={pageNumber >= numberOfPages - 1}
              className={`px-4 py-2 rounded-lg ${
                pageNumber >= numberOfPages - 1
                  ? "bg-gray-300 text-gray-600"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Index
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Brand
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sell Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    VAT
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sell Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {searchData?.searchedItem?.map((item, index) => (
                  <tr
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    key={item.id}
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">
                      {item.ProductBrand?.brandName}
                    </td>
                    <td className="px-6 py-4">
                      {item.ProductCategory?.categoryName}
                    </td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">{item.ProductType?.TypeName}</td>
                    <td className="px-6 py-4">{item.ProductUnit?.UnitName}</td>
                    <td className="px-6 py-4">{item.vat}</td>
                    <td className="px-6 py-4">{item.sellType}</td>
                    <td className="px-6 py-4 flex space-x-2">
                      <button
                        onClick={() => handleProductDelete(item.id)}
                        className="px-3 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>

                      <Link
                        to={`product-update/${item.id}`}
                        className="px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
