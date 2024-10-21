import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { BASE_URL } from "../../constants";
import { useState, useEffect } from "react";
import axios from "axios";

const AdvertDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const bookId = params.id;

  // State for book details
  const [bookDetail, setBookDetail] = useState({});
  const [isEditing, setIsEditing] = useState(false); // Controls edit mode
  const [feedbackMessage, setFeedbackMessage] = useState(""); // For feedback messages
  const [editedBook, setEditedBook] = useState({
    title: "",
    icon: ""
    // summary: "",
    // year: "",
    // genre: "",
    // content: "",
    // cover: "",
    // author: "",
  });

  // Fetch book details
  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos ${bookId}`);
      setBookDetail(response.data);
      setEditedBook({
        title: response.data.title,
        icon: response.data.icon,
        // summary: response.data.summary,
        // year: response.data.year,
        // genre: response.data.genre,
        // content: response.data.content,
        // cover: response.data.cover,
        // author: response.data.author,
      }); // Pre-fill the edit form with existing data
    };
    fetchBook();
  }, [bookId]);

  // Delete book function
  const deleteBook = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/todos ${bookId}`);
      setFeedbackMessage("Advert deleted successfully!");
      setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
    } catch (error) {
      setFeedbackMessage("Failed to delete advert.");
    }
  };

  // Update book function
  const updateBook = async () => {
    try {
      await axios.patch(`${import.meta.env.VITE_BASE_URL}/todos`, editedBook);
      setFeedbackMessage("Book updated successfully!");
      setTimeout(() => setFeedbackMessage(""), 2000); // Clear message after 2 seconds
      setIsEditing(false); // Exit edit mode after successful update
    } catch (error) {
      setFeedbackMessage("Failed to update book.");
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    setEditedBook({
      ...editedBook,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="flex ml-[10vw]">
        <div className="w-[20vw]">
          <img src={bookDetail.icon} alt={bookDetail.title} />
        </div>

        <div className="w-[40vw] m-10">
          {isEditing ? (
            // Edit form
            <div>
              <h1 className="font-bold text-xl mb-2">Edit Book</h1>
              <input
                type="text"
                name="title"
                value={editedBook.title}
                onChange={handleInputChange}
                className="border p-2 mb-2 w-full"
                placeholder="Title"
              />
              {/* <input
                type="text"
                name="author"
                value={editedBook.author}
                onChange={handleInputChange}
                className="border p-2 mb-2 w-full"
                placeholder="Author"
              />
              <textarea
                name="summary"
                value={editedBook.summary}
                onChange={handleInputChange}
                className="border p-2 mb-2 w-full"
                placeholder="Summary"
              />
              <input
                type="text"
                name="year"
                value={editedBook.year}
                onChange={handleInputChange}
                className="border p-2 mb-2 w-full"
                placeholder="Year"
              />
              <input
                type="text"
                name="genre"
                value={editedBook.genre}
                onChange={handleInputChange}
                className="border p-2 mb-2 w-full"
                placeholder="Genre"
              />
              <textarea
                name="content"
                value={editedBook.content}
                onChange={handleInputChange}
                className="border p-2 mb-2 w-full"
                placeholder="Content"
              /> */}
              <div className="flex space-x-4">
                <button
                  onClick={updateBook}
                  className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
                >
                  Update
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            // Display book details
            <div>
              <h1 className="font-bold text-2xl mb-4">{bookDetail.title}</h1>
              {/* <h2 className="mb-2">{bookDetail.summary}</h2>
              <h3 className="mb-2">{bookDetail.year}</h3>
              <h3 className="mb-2">{bookDetail.genre}</h3>
              <h4 className="mb-4">{bookDetail.content}</h4>
              <h4 className="mb-4">{bookDetail.author} </h4> */}

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

    </div>
  );
};

export default AdvertDetail;
