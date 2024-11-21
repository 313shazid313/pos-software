import { useState } from "react";
import { useGetAllOriginQuery, useCreateOriginMutation } from "../../../redux/product-additionals-state/originApi";
import { useNavigate } from "react-router-dom";
const OriginForm = () => {
  const handleGoBack = () => {
    navigate(-1);
  };


  const { refetch } = useGetAllOriginQuery();
  const navigate = useNavigate()
  const [createOrigin] = useCreateOriginMutation();

  const [element, setElement] = useState({
    originName: "",
    description: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setElement({
      ...element,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    console.log(element);
    e.preventDefault();
    try {
      await createOrigin({ ...element }).unwrap();
      refetch()
      alert("Create New Category successful!");
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div>
      <div>
        <p className="text-2xl">Add New Origin</p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto pt-16">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter New Origin Name</label>
            <input onChange={handleInputChange} name="originName" value={element.originName} required type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Category Description</label>
          <textarea onChange={handleInputChange} name="description" value={element.description} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
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
    </div>
  )
}

export default OriginForm
