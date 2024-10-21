import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaDollarSign,
  FaCog,
  FaChartLine,
  FaAd,
  FaUserCheck,
  FaSignOutAlt,
} from "react-icons/fa";
import pic from "../assets/images/Abu.jpg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Simulating vendor data (in a real app, you'd fetch this from the backend)
  const vendor = {
    name: "Abugre A",
    profilePicture:
      "https://citinewsroom.com/wp-content/uploads/2021/12/Daniel-Abugre-Anyorigya--e1638991555793.jpg", // Placeholder image URL; replace with vendor's actual profile picture URL
  };

  const handleLogout = () => {};

  return (
    <div
      className={`flex flex-col w-64 h-screen p-5 pt-24 bg-gray-800 text-white shadow-xl transition-all duration-300 ${
        isOpen ? "block" : "hidden"
      } lg:block`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 text-gray-300 lg:hidden"
      >
        {isOpen ? "Close" : "Open"} Sidebar
      </button>

      {/* Vendor Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={vendor.profilePicture}
          alt="Vendor Profile"
          className="w-20 h-20 mb-3 rounded-full border-2 border-gray-400"
        />
        <h3 className="text-lg font-semibold">{vendor.name}</h3>
        <p className="text-sm text-gray-400">Vendor</p>
      </div>

      <ul className="flex flex-col space-y-6">
        <li>
          <Link
            className="flex items-center space-x-3 hover:text-gray-400"
            to="/dashboard"
          >
            <FaChartLine size={20} />
            <span>Dashboard Overview</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-3 hover:text-gray-400"
            to="/dashboard/ads"
          >
            <FaAd size={20} />
            <span>Advertisements</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-3 hover:text-gray-400"
            to="/dashboard/reports"
          >
            <FaDollarSign size={20} />
            <span>Sales</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-3 hover:text-gray-400"
            to="/dashboard/settings"
          >
            <FaCog size={20} />
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-3 hover:text-gray-400"
            to="/dashboard/alerts"
          >
            <FaBell size={20} />
            <span className="relative">
              Alerts
              <span className="absolute top-0 left-5 w-2 h-2 bg-red-500 rounded-full"></span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-3 hover:text-gray-400"
            to="/dashboard/verify"
          >
            <FaUserCheck size={20} />
            <span>Get Verified</span>
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 hover:text-gray-400"
            to="/logout"
          >
            <FaSignOutAlt size={20} />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
