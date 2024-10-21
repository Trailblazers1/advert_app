import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logging out, such as clearing tokens
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Logout</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Confirm Logout
      </button>
    </div>
  );
};

export default Logout;
