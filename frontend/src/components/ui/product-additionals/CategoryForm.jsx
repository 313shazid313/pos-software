import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import {
  useGetAllCategoriesQuery,
  useDeleteaCategoryMutation,
  useCreateCategoryMutation,
} from "../../../redux/product-additionals-state/categoryApi";

// import { toast } from "react-toastify";
import toast from "react-hot-toast";
const CategoryForm = () => {
  const { data, isError, isLoading } = useGetAllCategoriesQuery();
  console.log(data);

  const handleGoBack = () => {
    navigate(-1);
  };

  const { refetch } = useGetAllCategoriesQuery();
  const navigate = useNavigate();
  const [createCategory] = useCreateCategoryMutation();

  const [element, setElement] = useState({
    categoryName: "",
    parentCategoryId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setElement({
      ...element,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(element);
    e.preventDefault();
    try {
      await createCategory({ ...element }).unwrap();
      refetch();
      // alert("Create New Category successful!");
      toast("Wow so easy!");
      // navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  //? organizing category data -------->
  function buildParentChildPaths(categories, parentPath = "") {
    let paths = [];

    (categories || []).forEach((category) => {
      // Build the current path
      const currentPath = parentPath
        ? `${parentPath} => ${category.categoryName}`
        : category.categoryName;

      // Add the current path as an object with name and id
      paths.push({ name: currentPath, id: category.id });

      // Recursively process children
      const childPaths = buildParentChildPaths(
        category.children || [],
        currentPath
      );

      // Concatenate the child paths to the main paths
      paths = paths.concat(childPaths);
    });
    return paths;
  }

  const parentChildPaths = buildParentChildPaths(data);
  console.log(parentChildPaths);

  const optionsArray = [
    { label: "Selected an Option", value: "X", isDisabled: true },
    { label: "No Parent Category", value: "" },

    ...parentChildPaths.map((item) => ({
      label: item.name,
      value: item.id,
    })),
  ];
  //? organizing category data -------->
  return (
    <div>
      <p className="text-2xl font-bold mb-6 text-center">Add New Category</p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto pt-16">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter New Category Name
          </label>
          <input
            onChange={handleInputChange}
            name="categoryName"
            value={element.categoryName}
            required
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div>
          <Select
            options={optionsArray}
            // defaultValue={optionsArray[1]}
            styles={{
              input: (base) => ({
                ...base,
                "input:focus": {
                  boxShadow: "none",
                },
              }),
            }}
            onChange={(selectedOption) =>
              setElement({
                ...element,
                parentCategoryId: selectedOption?.value || "",
              })
            }
          />
        </div>

        {/* <div>
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
        </div> */}

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
    </div>
  );
};

export default CategoryForm;
