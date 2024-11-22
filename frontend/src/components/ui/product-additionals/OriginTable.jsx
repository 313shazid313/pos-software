import { Link } from "react-router-dom";
import {
  useGetAllOriginQuery,
  useDeleteanOriginMutation,
} from "../../../redux/product-additionals-state/originApi";
import Loading from "../../Loading";
import Error404 from "../../Error404";

const OriginTable = () => {
  const { data, isError, isLoading, refetch } = useGetAllOriginQuery();

  let serial = 0;

  console.log(data);

  // const [deleteanOrigin] = useDeleteanOriginMutation();

  // const handleOriginDelete = async (id) => {
  //   try {
  //     if (confirm("Sure You Want to Delete")) {
  //       const response = await deleteanOrigin(id).unwrap();
  //       console.log(response);
  //       refetch();
  //     }
  //   } catch (error) {
  //     console.error("Failed to Delete", error);
  //   }
  // };

  if (isLoading) return <Loading />;
  if (isError) return <Error404 />;

  return (
    <div>
      <p className="text-2xl font-bold mb-6">Manage Origin</p>
      <div className="flex justify-end">
        <Link
          to="origin-form"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add New Origin
          </span>
        </Link>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Category name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={item.id}
              >
                <td className="px-6 py-4">{(serial = serial + 1)}</td>
                <td className="px-6 py-4">{item.originName}</td>
                <td className="px-6 py-4">{item.description}</td>
                {/* <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      handleOriginDelete(item.id);
                    }}
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td> */}
                <td className="px-6 py-4">
                  <Link to={`origin-update/${item.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OriginTable;
