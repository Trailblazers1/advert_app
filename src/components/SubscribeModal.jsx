import React, { useState } from "react";

const SubscribeModal = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    onClose(); // Close the modal after submission
  };

  if (!isVisible) return null; // Don't render the modal unless visible

  return (
    <div>
      {/* Backdrop - covers the entire page, ensures modal focus */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed bottom-0 right-0 m-4 z-50 max-w-sm w-full bg-white p-6 rounded-lg shadow-lg transition-transform transform translate-y-0 animate-slide-in-right">
        <h2 className="text-xl font-semibold mb-4">
          Subscribe to Our Newsletter
        </h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm">Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg mb-4"
            placeholder="Enter your email"
            required
          />

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeModal;
