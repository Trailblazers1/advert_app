import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AdvertDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const addId = params.id;

  const [addDetail, setAddDetail] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  // FetchAdd details
  const fetchAdd = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/adverts/${addId}`
    );
    setAddDetail(response.data);
  };

  useEffect(() => {
    fetchAdd();
  }, [addId]);

  const deleteAdd = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/adverts/${addId}`);
      setFeedbackMessage("Advert deleted successfully!");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      setFeedbackMessage("Failed to delete advert.");
    }
  };

  const updateAdvert = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.target);
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/adverts/${addId}`,
        formData
      );
      setFeedbackMessage("Advert updated successfully!");
      setTimeout(() => {
        setIsSubmitting(false);
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      setFeedbackMessage("Failed to update advert.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:ml-[5vw] items-center md:items-start bg-gray-100 min-h-screen p-8">
      {/* Advert Image and Info */}
      <div className="w-full md:w-[30vw] p-6 bg-white rounded-lg shadow-xl transform transition-transform hover:scale-105">
        <img
          src={`https://savefiles.org/${addDetail.icon}?shareable_link=437`}
          alt={addDetail.title}
          className="w-full h-auto rounded-lg shadow-lg mb-4 object-cover"
        />
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          {addDetail.title}
        </h1>
        <p className="text-lg text-gray-600 mb-4">{addDetail.description}</p>
        <p className="text-lg font-semibold text-gray-700">
          Category: <span className="text-blue-600">{addDetail.category}</span>
        </p>
        <p className="text-lg font-semibold text-gray-700 mt-2">
          Price: <span className="text-green-600">${addDetail.price}</span>
        </p>
      </div>

      {/* Editing Form and Actions */}
      <div className="w-full md:w-[40vw] m-4">
        {isEditing ? (
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
            <h1 className="font-extrabold text-2xl mb-6 text-gray-800">
              Edit Advert
            </h1>
            <form className="space-y-4" onSubmit={updateAdvert}>
              {/* Title */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Title</label>
                <input
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
                  type="text"
                  placeholder="Enter your title"
                  required
                  name="title"
                  defaultValue={addDetail.title}
                />
              </div>

              {/* Description */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">
                  Description
                </label>
                <input
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
                  type="text"
                  placeholder="Enter your description"
                  required
                  name="description"
                  defaultValue={addDetail.description}
                />
              </div>

              {/* Price */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Price</label>
                <input
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
                  type="text"
                  placeholder="Enter your price"
                  required
                  name="price"
                  defaultValue={addDetail.price}
                />
              </div>

              {/* Category */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Category</label>
                <select
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
                  required
                  name="category"
                  defaultValue={addDetail.category}
                >
                  <option value="">Select a category</option>
                  <option value="condom">condom</option>
                  <option value="pills">pills</option>
                  <option value="enhancements">enhancemts</option>
                  <option value="lubricants">lubricants</option>
                
                </select>
              </div>

              {/* Upload Image */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">
                  Upload Image
                </label>
                <input
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
                  type="file"
                  name="icon"
                />
              </div>

              {/* Submit Button */}
              <button
                className={`w-full bg-blue-500 text-white p-3 rounded-lg font-bold mt-6 transition-all hover:bg-blue-600 transform hover:scale-105 ${
                  isSubmitting ? "cursor-not-allowed opacity-50" : ""
                }`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update Advert"}
              </button>
            </form>

            {/* Cancel Button */}
            <button
              onClick={() => setIsEditing(false)}
              className="mt-4 w-full bg-gray-500 text-white p-3 rounded-lg font-bold transition-all hover:bg-gray-600 transform hover:scale-105"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
            <h1 className="font-extrabold text-2xl mb-6 text-gray-800">
              Manage Advert
            </h1>
            <div className="flex space-x-4">
              {/* Edit Button */}
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white p-3 rounded-lg font-bold transition-all hover:bg-blue-600 transform hover:scale-105"
              >
                Edit
              </button>

              {/* Delete Button */}
              <button
                onClick={deleteAdd}
                className="bg-red-500 text-white p-3 rounded-lg font-bold transition-all hover:bg-red-600 transform hover:scale-105"
              >
                Delete
              </button>
            </div>
          </div>
        )}

        {/* Feedback Message */}
        {feedbackMessage && (
          <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg shadow-md">
            {feedbackMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvertDetail;
