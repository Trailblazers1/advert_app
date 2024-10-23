import React, { useState } from "react";
import { useNavigate } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"; // Add this for Google auth
import { apiSignup } from "../../services/auth";
import axios from "axios"; // Assuming you are using axios for API calls

const AuthForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate;
  const handleSubmit = async (event) => {
    event.preventDefault(); //prevent the page from reloading
    //
    try {
      // prepare data to be sent to the backend
      const formData = new FormData(event.target); //helps get data from the form
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const role = formData.get("role");
      //data validation
      //console.log("name, name")
      const payload = {
        name: name,
        email: email,
        password: password,
        role: role,
      }; //if key and value are the same, you can just use one
      //const payload = {name,email,password,role:"vendor"}; just one name
      const response = await apiSignup(payload);
      console.log(response.data);
      //Toast sucess
      navigate("/dashboard");
    } catch (error) {
      //toast /console.log
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  // };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-20">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center"></h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="name"
                name="name"
                // value={formData.email}
                // onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring  }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring  }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring `}
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-[#E56F47] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              {/* {" "} */}
              
              {loading ? "Loading..." : "Register"}
            </button>
          </form>

          {/* Google and Apple Login Buttons */}
          <div className="mt-4 text-center">
            <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
              <GoogleLogin
                // onSuccess={handleGoogleLoginSuccess}
                onError={() => console.log("Google login error")}
              />
            </GoogleOAuthProvider>
          </div>

          <div className="text-center">
            <button className="text-indigo-600 hover:text-indigo-800">
              
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthForm;
