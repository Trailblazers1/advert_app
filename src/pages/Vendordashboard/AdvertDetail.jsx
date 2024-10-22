import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { BASE_URL } from "../../constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { Category, Description, } from "@mui/icons-material";

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
    icon: "" ,
    description: "",
    Price: "",
    Category: ""
  });

  console.log('book', editedBook)
  // Fetch book details
  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/adverts/${bookId}`);
      setBookDetail(response.data);
      console.log('ressss', response)
      // setEditedBook({
      //   title: response.data.title,
      //   // icon: response.data.icon,
      //  description : response.data.description,
      //   Category: response.data.category,
      //   Price: response.data.price,
        
      // }); // Pre-fill the edit form with existing data
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


    const updateAdvert = async (event) =>{
        event.preventDefault();
       
       try {
        const formData = new FormData(event.target)
        const data = await axios.patch(`${import.meta.env.VITE_BASE_URL}/adverts/${bookId}`, formData)
        console.log('hyff', formData, data)
        setFeedbackMessage("Book updated successfully!");
        setTimeout(() => setFeedbackMessage(""), 2000);
       } catch (error) {
        setFeedbackMessage("Failed to update book.");
       }
    }
  
  // Update book function
  // const updateBook = async () => {
  //   try {

      
  //     await axios.patch(`${import.meta.env.VITE_BASE_URL}/adverts/${bookId}`, editedBook);
  //     setFeedbackMessage("Book updated successfully!");
  //     setTimeout(() => setFeedbackMessage(""), 2000); // Clear message after 2 seconds
  //     setIsEditing(false); // Exit edit mode after successful update
  //   } catch (error) {
  //     setFeedbackMessage("Failed to update book.");
  //   }
  // };

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
        <img src={`https://savefiles.org/${bookDetail.icon}?shareable_link=437`} alt="title" />
          <h1>{bookDetail.title}</h1>
          <h1>{bookDetail.description}</h1>
          <h1>{bookDetail.category}</h1>
          <h1>{bookDetail.price}</h1>
        </div>

        <div className="w-[40vw] m-10">
          {isEditing ? (
            // Edit form
            <div>
              <h1 className="font-bold text-xl mb-2">Edit Book</h1>

              <form className='grid justify-center' onSubmit={updateAdvert}>
        <input className='border-2 w-[50vw]' type="text" placeholder='enter your title' required name='title' />
         <input className='border-2' type="text" placeholder='enter your description' required name='description' />
        <input className='border-2' type="text" placeholder='enter your price' required name='price' />
        <input className='border-2' type="text" placeholder='enter your category' required name='category'/> 
        <input className='border-2' type="file"  required name='icon' />
        <button className='border-2' type="submit">submit</button>
    </form>
              {/* <input
                type="text"
                name="title"
                value={editedBook.title}
                onChange={handleInputChange}
                className="border p-2 mb-2 w-full"
                placeholder="Title"
              />
               <input
                type="text"
                name="decription"
                value={editedBook.description}
                onChange={handleInputChange}
                className="border p-2 mb-2 w-full"
                placeholder="decription"
              />
              <textarea
                name="category"
                value={editedBook.Category}
                onChange={handleInputChange}
                className="border p-2 mb-2 w-full"
                placeholder="category"
              />
               <input
                type="text"
                name="price"
                value={editedBook.Price}
                onChange={handleInputChange}
                className="border p-2 mb-2 w-full"
                placeholder="price"
              />  */}
              {/* <input
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
              />  */}
              <div className="flex space-x-4">
                {/* <button
                  onClick={updateAdvert}
                  className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
                >
                  Update
                </button> */}
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
