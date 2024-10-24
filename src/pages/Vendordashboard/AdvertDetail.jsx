import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AdvertDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const bookId = params.id;

  const [bookDetail, setBookDetail] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");


 
  // Fetch book details
  const fetchBook = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/adverts/${bookId}`);
    setBookDetail(response.data);
  };
  
  useEffect(() => {

    fetchBook();
  }, [bookId]);

  const deleteBook = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/adverts/${bookId}`);
      setFeedbackMessage("Advert deleted successfully!");
      setTimeout(() => navigate("/"), 2000);
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
        `${import.meta.env.VITE_BASE_URL}/adverts/${bookId}`,
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
    <div className="flex flex-col md:flex-row md:ml-[5vw] items-center md:items-start">
      <div className="w-full md:w-[30vw] p-4">
        <img
          src={`https://savefiles.org/${bookDetail.icon}?shareable_link=437`}
          alt="title"
          className="w-full h-auto rounded-lg shadow-lg mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {bookDetail.title}
        </h1>
        <p className="text-lg text-gray-600">{bookDetail.description}</p>
        <p className="text-lg text-gray-600">Category: {bookDetail.category}</p>
        <p className="text-lg text-gray-600">Price: ${bookDetail.price}</p>
      </div>

      <div className="w-full md:w-[40vw] m-4">
        {isEditing ? (
          <div>
            <h1 className="font-bold text-2xl mb-4">Edit Advert</h1>
            <form className="space-y-4" onSubmit={updateAdvert}>
              <div className="flex flex-col">
                <label className="font-medium text-gray-700">Title</label>
                <input
                  className="border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300"
                  type="text"
                  placeholder="Enter your title"
                  required
                  name="title"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700">Description</label>
                <input
                  className="border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300"
                  type="text"
                  placeholder="Enter your description"
                  required
                  name="description"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700">Price</label>
                <input
                  className="border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300"
                  type="text"
                  placeholder="Enter your price"
                  required
                  name="price"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700">Category</label>
                <select
                  className="border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300"
                  required
                  name="category"
                >
                  <option value="">Select a category</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Science">Science</option>
                  <option value="History">History</option>
                  <option value="Technology">Technology</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700">
                  Upload Image
                </label>
                <input
                  className="border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300"
                  type="file"
                  required
                  name="icon"
                />
              </div>

              <button
                className={`w-full bg-[#00BEFE] text-white p-3 rounded-lg font-bold mt-4 hover:bg-blue-700 transition duration-300 transform hover:scale-105 ${
                  isSubmitting ? "cursor-not-allowed opacity-50" : ""
                }`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Data editing..." : "Submit"}
              </button>
            </form>

            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 mt-4"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-2xl mb-4">{bookDetail.title}</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={deleteBook}
                className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        )}

        {feedbackMessage && (
          <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg">
            {feedbackMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvertDetail;
