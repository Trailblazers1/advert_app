import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { apiForgotPassword } from "../../services/auth"; // Assuming you have an API service for forgot password
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    try {
      const response = await apiForgotPassword({ email }); // Call the API for password reset
      if (response.status === 200) {
        // Show success message
        toast.success("Password reset link sent to your email!");
      }
    } catch (error) {
      // Show error message
      toast.error("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-20">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-[#E56F47] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Enter your registered email to receive a password reset link.
          </p>
        </div>
      </div>
      <Footer />

      {/* Toast notifications container */}
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
