import React, { useState } from "react";

const GetVerified = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    document: null,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode toggle

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, document: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { businessName, email, phone, document } = formData;

    if (!businessName || !email || !phone || !document) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Simulate form submission
    setSuccessMessage("Your verification request has been submitted!");
    setErrorMessage("");
    setFormData({
      businessName: "",
      email: "",
      phone: "",
      document: null,
    });
  };

  // Dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen p-8 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition duration-300`}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Get Verified</h1>
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-blue-600 text-white"} hover:bg-blue-700 transition`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <form onSubmit={handleSubmit} className={`p-8 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"} max-w-lg mx-auto`}>
        <h2 className="text-xl font-semibold mb-6">Submit Your Details for Verification</h2>

        {/* Business Name */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Business Name:</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "border-gray-300"} transition`}
            placeholder="Enter your business name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "border-gray-300"} transition`}
            placeholder="Enter your email"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "border-gray-300"} transition`}
            placeholder="Enter your phone number"
          />
        </div>

        {/* Upload Document */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Upload Verification Document:</label>
          <input
            type="file"
            name="document"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full px-4 py-2 rounded-lg text-white ${isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} transition`}
        >
          Submit
        </button>

        {/* Success/Error Messages */}
        {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
        {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default GetVerified;
