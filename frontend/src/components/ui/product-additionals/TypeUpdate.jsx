import {
  useSingleTypeQuery,
  useUpdateTypeMutation,
} from "../../../redux/product-additionals-state/typeApi";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../Loading";

const TypeUpdate = () => {
  const handleGoBack = () => {
    navigate(-1);
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading: isDataLoading, error } = useSingleTypeQuery(id);
  // console.log(data?.aCategory.originName);
  console.log(data);
  const [updateType, { isLoading: isUpdating }] = useUpdateTypeMutation();

  const [element, setElement] = useState({
    TypeName: "",
    description: "",
  });

  useEffect(() => {
    if (data?.aType) {
      setElement({
        TypeName: data.aType.TypeName || "",
        description: data.aType.description || "",
      });
    }
  }, [data?.aType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setElement((prevState) => ({
      ...prevState,
      [name]: value, // Update state with selected value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(element);
    try {
      await updateType({ id: id, status: element }).unwrap();
      alert("Categories updated successfully!");
      navigate(-1);
    } catch (err) {
      console.error("Failed to update Category:", err);
      alert("An error occurred while updating the brand.");
    }
  };

  if (isDataLoading) return <Loading />;
  if (error) return <p>Error loading brand details: {error.message}</p>;

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Update Category</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto pt-16">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Enter Category Name
            </label>
            <input
              onChange={handleInputChange}
              name="TypeName"
              value={element.TypeName}
              required
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter Category Description
          </label>
          <textarea
            onChange={handleInputChange}
            name="description"
            value={element.description}
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
          {/* <div className="pt-5">
            <button
              type="submit"
              disabled={isUpdating}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {isUpdating ? "Updating..." : "Edit Brand"}
              </span>
            </button>
          </div> */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={handleGoBack}
              type="submit"
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
      </div>
    </div>
  );
};

export default TypeUpdate;
