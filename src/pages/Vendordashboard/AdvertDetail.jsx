import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AdvertDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const bookId = params.id;

  // State for book details
  const [bookDetail, setBookDetail] = useState({});
  const [isEditing, setIsEditing] = useState(false); // Controls edit mode
  const [isSubmitting, setIsSubmitting] = useState(false); // For form submission feedback
  const [feedbackMessage, setFeedbackMessage] = useState(""); // For feedback messages

  // Fetch book details
  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/adverts/${bookId}`);
      setBookDetail(response.data);
    };
    fetchBook();
  }, [bookId]);

  // Delete book function
  const deleteBook = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/adverts/${bookId}`);
      setFeedbackMessage("Advert deleted successfully!");
      setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
    } catch (error) {
      setFeedbackMessage("Failed to delete advert.");
    }
  };

  // Update Advert
  const updateAdvert = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Start submission process

    try {
      const formData = new FormData(event.target);
      await axios.patch(`${import.meta.env.VITE_BASE_URL}/adverts/${bookId}`, formData);
      setFeedbackMessage("Book updated successfully!");
      setTimeout(() => {
        setIsSubmitting(false);
        navigate("/dashboard"); // Redirect to dashboard after successful update
      }, 2000);
    } catch (error) {
      setFeedbackMessage("Failed to update book.");
      setIsSubmitting(false); // Stop submission process
    }
  };

  return (
    <div className="flex ml-[10vw]">
      <div className="w-[20vw]">
        <img src={`https://savefiles.org/${bookDetail.icon}?shareable_link=437`} alt="title" />
        <h1>{bookDetail.title}</h1>
        <h1>{bookDetail.description}</h1>
        <h1>{bookDetail.category}</h1>
        <h1>{bookDetail.price}</h1>
      </div>

      <div className="w-[40vw] m-10">
        {isEditing ? (
          // Edit form without pre-population
          <div>
            <h1 className="font-bold text-xl mb-2">Edit Book</h1>

            <form className="grid justify-center" onSubmit={updateAdvert}>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                className="border-2 w-[50vw] mb-4 p-2"
                type="text"
                placeholder="Enter your title"
                required
                name="title"
              />
              <label className="block text-sm font-medium text-gray-700">Decription</label>
              <input
                className="border-2 mb-4 p-2"
                type="text"
                placeholder="Enter your description"
                required
                name="description"
              />
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                className="border-2 mb-4 p-2"
                type="text"
                placeholder="Enter your price"
                required
                name="price"
              />
               <label className="block text-sm font-medium text-gray-700">Category</label>
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

              <input className="border-2 mb-4 p-2" type="file" required name="icon" />

              <button
                className={`border-2 bg-blue-500 text-white p-2 ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Data editing..." : "Submit"}
              </button>
            </form>

            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 mt-4"
            >
              Cancel
            </button>
          </div>
        ) : (
          // Display book details
          <div>
            <h1 className="font-bold text-2xl mb-4">{bookDetail.title}</h1>

            <div className="flex space-x-4">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={deleteBook}
                className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        )}

        {/* Feedback Message */}
        {feedbackMessage && (
          <div className="mt-4 p-2 bg-green-100 border-l-4 border-green-500 text-green-700">
            {feedbackMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvertDetail;
