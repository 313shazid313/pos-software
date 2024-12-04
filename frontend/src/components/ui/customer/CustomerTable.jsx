import { Link } from "react-router-dom";
// import {
//   useGetAllSupplierQuery,
//   useDeleteaSupplierMutation,
// } from "../../../redux/services/suppliersApi";
import { useGetAllCustomerQuery,useDeleteaCustomerMutation } from "../../../redux/services/customerApi";


// icons
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

// components
import Loading from "../../Loading";


const CustomerTable = () => {


    let serial = 0;
    const { data, isError, isLoading, refetch } = useGetAllCustomerQuery();
  
    console.log(data);
  
    const [deleteaCustomer] = useDeleteaCustomerMutation();
  
    const handleCustomerDelete = async (id) => {
      try {
        if (confirm("Sure You Want to Delete")) {
          const response = await deleteaCustomer(id).unwrap();
          console.log(response);
          refetch();
        }
      } catch (error) {
        console.error("Failed to Delete", error);
      }
    };
  
    if (isLoading) {
      return <Loading />;
    }
  



  return (
    <div aria-hidden="true">
      <p className="text-2xl font-bold mb-6">Manage Customer</p>
      <div className="flex justify-end">
        <Link
          to="customer-form"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add Customer
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
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {!isError &&
              data?.allCustomer?.map((item) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={item.id}
                >
                  <td className="px-6 py-4">{(serial = serial + 1)}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.mobile}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.address}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        handleCustomerDelete(item.id);
                      }}
                      type="button"
                    >
                      <MdDeleteSweep className="text-2xl text-red-700 m-4" />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`supplier-update/${item.id}`}>
                      <FaEdit className="text-xl text-blue-500 m-4" />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CustomerTable