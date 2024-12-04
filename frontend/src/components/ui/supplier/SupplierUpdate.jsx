import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../Loading";
// redux
import {
  useSingleSupplierQuery,
  useUpdateaSupplierMutation,
} from "../../../redux/services/suppliersApi";

const SupplierUpdate = () => {
  const handleGoBack = () => {
    navigate(-1);
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading: isDataLoading, error } = useSingleSupplierQuery(id);

  console.log(data);
  const [updateaSupplier] = useUpdateaSupplierMutation();

  const [element, setElement] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (data?.aSupplier) {
      setElement({
        name: data?.aSupplier?.name || "",
        email: data?.aSupplier?.email || "",
        mobile: data?.aSupplier?.mobile || "",
        address: data?.aSupplier?.address || "",
      });
    }
  }, [data?.aSupplier]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setElement((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(element);
    try {
      await updateaSupplier({ id: id, status: element }).unwrap();
      alert("Supplier updated successfully!");
      navigate(-1);
    } catch (err) {
      console.error("Failed to update Supplier:", err);
      alert("An error occurred while updating the Supplier.");
    }
  };

  if (isDataLoading) return <Loading />;
  if (error) return <p>Error loading brand details: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              value={element.name}
              onChange={handleInputChange}
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Phone
          </label>
          <div className="mt-2">
            <input
              id="last-name"
              name="mobile"
              type="text"
              value={element.mobile}
              onChange={handleInputChange}
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              id="last-name"
              name="email"
              value={element.email}
              type="text"
              autoComplete="family-name"
              onChange={handleInputChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Address
          </label>
          <div className="mt-2">
            <input
              id="last-name"
              name="address"
              type="text"
              autoComplete="family-name"
              value={element.address}
              onChange={handleInputChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={handleGoBack}
          type="button"
          className="text-sm/6 font-semibold text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default SupplierUpdate;
