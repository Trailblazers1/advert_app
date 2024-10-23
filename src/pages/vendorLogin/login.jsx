import { useNavigate } from "react-router-dom"; // Use for navigation after login
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useState } from "react";
import { apiSignin } from "../../services/auth";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"; // Google auth
import { ToastContainer, toast } from "react-toastify"; // Toast library
import "react-toastify/dist/ReactToastify.css"; // Toastify styles

const VendorLogin = () => {
  const navigate = useNavigate(); // Initialize useNavigate for redirection after login
  const [role, setRole] = useState("vendor"); // State to store the selected role

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the page from reloading

    const formData = new FormData(event.target); // get data from the form
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await apiSignin({ email, password });
      if (response.status === 200) {
        // Store token
        localStorage.setItem("token", response.data.accessToken);

        // Show success toast
        toast.success("Login successful!");

        // Redirect user after successful login
        setTimeout(() => {
          navigate("/dashboard"); // Change to your desired path
        }, 2000);
      }
    } catch (error) {
      // Show error toast
      toast.error("Login failed! Please check your credentials.");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgotpassword"); // Navigate to the Forgot Password page
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-20">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Vendor Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
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
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
              />
            </div>

            

            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-[#E56F47] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </form>

          {/* Google and Apple Login Buttons */}
          <div className="mt-4 text-center">
            <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  // Handle Google login success here
                  toast.success("Google login successful!");
                }}
                onError={() => toast.error("Google login error")}
              />
            </GoogleOAuthProvider>
          </div>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <button
              className="text-indigo-600 hover:text-indigo-800 font-semibold"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {/* Toast notifications container */}
      <ToastContainer />
    </div>
  );
};

export default VendorLogin;
