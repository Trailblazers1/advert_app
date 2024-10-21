import pic from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg shadow-lg">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo and title */}
          <div className="flex items-center">
            <img src={pic} alt="Logo" className="h-12 w-12 object-contain" />
            <Link to="/" className="ml-4 text-2xl font-bold text-white">
              adport
            </Link>
          </div>

          {/* Hamburger menu for small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-black hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-yellow-400 transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-yellow-400 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Current Time and Button */}
          <ul className="flex items-center space-x-6">
            <li className="text-black text-sm md:text-base font-medium">
              {currentTime.toLocaleDateString()} -{" "}
              {currentTime.toLocaleTimeString()}
            </li>
            <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 transition duration-300">
              Post Ad
            </button>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center bg-gray-900 bg-opacity-90 py-4 space-y-4">
              <Link
                to="/"
                className="text-white hover:text-yellow-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-yellow-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-yellow-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
