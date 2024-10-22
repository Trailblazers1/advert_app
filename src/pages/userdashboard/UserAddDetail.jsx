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
    <div>
      <div className="flex ml-[10vw]">
        <div className="w-[20vw]">
        <img src={`https://savefiles.org/${bookDetail.icon}?shareable_link=437`} alt="title" />
          <h1>{bookDetail.title}</h1>
          <h1>{bookDetail.description}</h1>
          <h1>{bookDetail.category}</h1>
          <h1>{bookDetail.price}</h1>
        </div>

        
      </div>

    </div>
  );
};

export default UserAddDetails;
