import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useNavigate } from "react-router-dom";
import {
  useCreateProductMutation,
  useGetAllProductsQuery,
} from "../../redux/services/productsApi";

import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

import { useGetAllTypesQuery } from "../../redux/product-additionals-state/typeApi";
import { useGetAllOriginQuery } from "../../redux/product-additionals-state/originApi";
import { useGetAllUnitQuery } from "../../redux/product-additionals-state/unitApi";
import { useGetAllCategoriesQuery } from "../../redux/product-additionals-state/categoryApi";
import { useGetAllBrandsQuery } from "../../redux/product-additionals-state/brandApi";

import Select from "react-select";

const ProductForm = () => {
  const { refetch } = useGetAllProductsQuery();
  const [createProduct] = useCreateProductMutation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { data: typeData } = useGetAllTypesQuery();
  const { data: unitData } = useGetAllUnitQuery();
  const { data: brandData } = useGetAllBrandsQuery();
  const { data: categoryData } = useGetAllCategoriesQuery();
  const { data: originData } = useGetAllOriginQuery();

  // console.log(typeData);
  // console.log(unitData);
  // console.log(brandData);
  // console.log(categoryData);
  // console.log(originData);

  const [items, setItems] = useState({
    name: "",
    description: "",
    specification: "",
    imageurl: "",
    price: "",
    mrpPrice: "",
    expiryDate: "",
    sellType: "",
    vat: "",
    quantity: "",
    ProductCategoryId: "",
    ProductOriginId: "",
    ProductBrandId: "",
    ProductTypeId: "",
    ProductUnitId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItems({
      ...items,
      [name]: value,
    });
  };

  const handleProductSubmit = async (event) => {
    event.preventDefault();
    console.log(items);
    try {
      await createProduct({ ...items }).unwrap();
      refetch();
      alert("Create New Category successful!");
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  // organizing categories
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

  const parentChildPaths = buildParentChildPaths(categoryData);
  // console.log(parentChildPaths);

  const optionsArray = [
    { label: "Select an Option", value: "X", isDisabled: true },
    { label: "No Parent Category", value: "" },

    ...parentChildPaths.map((item) => ({
      label: item.name,
      value: item.id,
    })),
  ];
  // console.log(optionsArray);
  //? organizing category data -------->

  return (
    <form className="" onSubmit={handleProductSubmit}>
      <p className="text-2xl">Create New Product</p>
      <div className="space-y-12">
        <div className="border-gray-900/10 pb-12">
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
                  value={items.name}
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
                Price
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="price"
                  type="number"
                  value={items.price}
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
                MRP Price
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="mrpPrice"
                  value={items.mrpPrice}
                  type="number"
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
                Quantity
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="quantity"
                  type="number"
                  autoComplete="family-name"
                  value={items.quantity}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                />
              </div>
            </div>
            {/* category */}
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Product Category
              </label>
              <div className="mt-2">
                {/* <select
                  id="ProductCategoryId"
                  name="ProductCategoryId"
                  value={items.ProductCategoryId || ""}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    -----Select Category-----
                  </option>
                  {categoryData &&
                    categoryData.map((Item) => (
                      <option key={Item.id} value={Item.id}>
                        {Item.categoryName}
                      </option>
                    ))}
                </select> */}

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
                    setItems({
                      ...items,
                      parentCategoryId: selectedOption?.value || "",
                    })
                  }
                />
              </div>
            </div>
            {/* Brand  */}
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Product Brand
              </label>
              <div className="mt-2">
                <select
                  id="ProductBrandId"
                  name="ProductBrandId"
                  value={items.ProductBrandId}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    -----Select Brand-----
                  </option>
                  {brandData &&
                    brandData.map((Item) => (
                      <option key={Item.id} value={Item.id}>
                        {Item.brandName}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            {/* produ */}
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Product Type
              </label>
              <div className="mt-2">
                <select
                  id="ProductTypeId"
                  name="ProductTypeId"
                  value={items.ProductTypeId}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    -----Select Type-----
                  </option>
                  {typeData &&
                    typeData.map((Item) => (
                      <option key={Item.id} value={Item.id}>
                        {Item.TypeName}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            {/* Origin */}
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Product Origin
              </label>
              <div className="mt-2">
                <select
                  id="ProductOriginId"
                  name="ProductOriginId"
                  value={items.ProductOriginId}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    -----Select Origin-----
                  </option>
                  {originData &&
                    originData.map((Item) => (
                      <option key={Item.id} value={Item.id}>
                        {Item.originName}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            {/* Unit */}
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Product Unit
              </label>
              <div className="mt-2">
                <select
                  id="ProductUnitId"
                  name="ProductUnitId"
                  value={items.ProductUnitId}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    -----Select Unit-----
                  </option>
                  {unitData &&
                    unitData.map((Item) => (
                      <option key={Item.id} value={Item.id}>
                        {Item.UnitName}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="py-2">
            <label
              htmlFor="not-applicable"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Description
            </label>
            <CKEditor
              id="description"
              name="description"
              editor={ClassicEditor}
              data={items.description} // Use 'data' to set initial content
              onChange={(event, editor) => {
                const data = editor.getData(); // Extract content
                handleInputChange({
                  target: { name: "description", value: data },
                });
              }}
              config={{
                toolbar: [
                  "undo",
                  "redo",
                  "|",
                  "heading",
                  "|",
                  "bold",
                  "italic",
                  "|",
                  "link",
                  "insertTable",
                  "mediaEmbed",
                  "|",
                  "bulletedList",
                  "numberedList",
                  "indent",
                  "outdent",
                ],
                plugins: [
                  Bold,
                  Essentials,
                  Heading,
                  Indent,
                  IndentBlock,
                  Italic,
                  Link,
                  List,
                  MediaEmbed,
                  Paragraph,
                  Table,
                  Undo,
                ],
              }}
            />
          </div>

          <div className="py-4">
            <label
              htmlFor="not-applicable"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Specification
            </label>
            <div>
              <CKEditor
                id="specification"
                name="specification"
                editor={ClassicEditor}
                data={items.specification} // Use 'data' to set initial content
                onChange={(event, editor) => {
                  const data = editor.getData(); // Extract content
                  handleInputChange({
                    target: { name: "specification", value: data },
                  });
                }}
                config={{
                  toolbar: [
                    "undo",
                    "redo",
                    "|",
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "|",
                    "link",
                    "insertTable",
                    "mediaEmbed",
                    "|",
                    "bulletedList",
                    "numberedList",
                    "indent",
                    "outdent",
                  ],
                  plugins: [
                    Bold,
                    Essentials,
                    Heading,
                    Indent,
                    IndentBlock,
                    Italic,
                    Link,
                    List,
                    MediaEmbed,
                    Paragraph,
                    Table,
                    Undo,
                  ],
                }}
              />
            </div>
          </div>
        </div>

        <div className="border-gray-900/10">
          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">
                Vat
              </legend>
              <div className="mt-3 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="applicable"
                    name="vat"
                    value="applicable"
                    onChange={handleInputChange}
                    type="radio"
                    className="size-4 border-gray-300 text-blring-blue-600-600 focus:ring-blue-600-600"
                  />
                  <label
                    htmlFor="applicable"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Applicable
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="not-applicable"
                    name="vat"
                    value="not-applicable"
                    onChange={handleInputChange}
                    type="radio"
                    className="size-4 border-gray-300 text-blring-blue-600-600 focus:ring-blue-600-600"
                  />
                  <label
                    htmlFor="not-applicable"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Not Applicable
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">
                Sell Type
              </legend>
              <div className="mt-3 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="general-sell"
                    name="sellType"
                    value="general-sell"
                    type="radio"
                    onChange={handleInputChange}
                    className="size-4 border-gray-300 text-blring-blue-600-600 focus:ring-blue-600-600"
                  />
                  <label
                    htmlFor="general-sell"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    General Sell
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="corporate-sell"
                    name="sellType"
                    value="corporate-sell"
                    type="radio"
                    onChange={handleInputChange}
                    className="size-4 border-gray-300 text-blring-blue-600-600 focus:ring-blue-600-600"
                  />
                  <label
                    htmlFor="corporate-sell"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Corporate Sell
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      {/*photos  */}
      <div className="col-span-full py-6">
        <label className="block text-sm/6 font-medium text-gray-900">
          Product Image
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <svg
              className="mx-auto size-12 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="mt-4 flex text-sm/6 text-gray-600">
              <label className="relative cursor-pointer rounded-md bg-white font-semibold text-blring-blue-600-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600-600 focus-within:ring-offset-2 hover:text-blring-blue-600-500">
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
      {/* date */}
      <div className="py-6 max-w-64">
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Expiry Date
        </label>
        <div className="mt-2">
          <input
            id="expiryDate"
            name="expiryDate"
            value={items.expiryDate}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
            type="date"
          />
        </div>
      </div>
      {/* submit button */}
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

export default ProductForm;
