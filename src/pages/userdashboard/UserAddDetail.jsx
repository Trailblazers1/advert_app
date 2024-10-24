import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";

// import { BASE_URL } from "../../constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { Category, Description } from "@mui/icons-material";

const UserAddDetails = () => {
  const params = useParams();
  //   const navigate = useNavigate();
  const bookId = params.id;

  // State for book details
  const [bookDetail, setBookDetail] = useState({});

  // Fetch book details
  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/adverts/${bookId}`);
      setBookDetail(response.data);
      // Pre-fill the edit form with existing data
    };
    fetchBook();
  }, [bookId]);

  // Delete book function

  console.log('hey', bookDetail)
  // Update book function


  // Handle form input change

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
  
      {/* Main Content */}
      <div className="flex justify-center items-center flex-grow">
        <div className="w-full lg:w-[60vw] text-center flex flex-col items-center">
          {/* Image */}
          <img
            src={`https://savefiles.org/${bookDetail.icon}?shareable_link=437`}
            alt={bookDetail.title}
            className="w-[50vw] h-[50vh] rounded-lg object-cover mt-20"
          />
  
          {/* Book Details */}
          <h1 className="text-xl lg:text-2xl font-bold mt-4">{bookDetail.title}</h1>
          <p className="text-base lg:text-lg text-gray-700 mt-2">
            {bookDetail.description}
          </p>
          <p className="text-base lg:text-lg text-gray-500 mt-2">
            {bookDetail.category}
          </p>
          <p className="text-lg font-semibold text-blue-600 mt-4">
            ${bookDetail.price}
          </p>
        </div>
      </div>
  
      <Footer />
    </div>
  );
  
  
};

export default UserAddDetails;
