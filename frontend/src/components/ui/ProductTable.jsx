import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/services/productsApi";

const ProductTable = () => {
  let serial = 0;
  const { data } = useGetAllProductsQuery();

  console.log(data);

  const handleProductDelete = () => {};

  return (
    <div>
      <p className="text-2xl">Manage Type</p>
      <div className="flex justify-end">
        <Link
          to="product-form"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add New +
          </span>
        </Link>
      </div>

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
                vat
              </th>
              <th scope="col" className="px-6 py-3">
                Sell Type
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <tr
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                key={item.id}
              >
                <td className="px-6 py-4">{(serial = serial + 1)}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.ProductBrand?.brandName}</td>
                <td className="px-6 py-4">
                  {item.ProductCategory?.categoryName}
                </td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.ProductType?.TypeName}</td>
                <td className="px-6 py-4">{item.ProductUnit?.UnitName}</td>
                <td className="px-6 py-4">{item.vat && <>Applicable</>}</td>
                <td className="px-6 py-4">{item.sellType && <>General</>}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      handleProductDelete(item.id);
                    }}
                    type="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
