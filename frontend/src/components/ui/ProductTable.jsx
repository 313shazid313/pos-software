import { Link } from "react-router-dom"

const ProductTable = () => {
  return (
    <div>
      <div className="flex justify-end">
        <Link to="product-form" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add New Product
          </span>
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right  text-gray-500 dark:text-gray-400">
          <thead className="text-base  text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className=" px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default ProductTable
