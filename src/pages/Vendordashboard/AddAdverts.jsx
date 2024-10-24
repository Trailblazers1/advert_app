import axios from "axios";
import React from "react";

const AddAdverts = () => {
  const saveAdvert = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    await axios.post(`${import.meta.env.VITE_BASE_URL}/adverts`, formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add an Advert
        </h1>

        <form className="space-y-6" onSubmit={saveAdvert}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Enter your title"
              required
              name="title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your description"
              required
              name="description"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Enter your price"
                required
                name="price"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              {/* Dropdown for Category */}
              <select className="border-2 mb-4 p-2" required name="category">
                <option value="">Select a category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="Technology">Technology</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Icon
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="file"
              required
              name="icon"
            />
          </div>

          <button
            className="w-full py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdverts;
