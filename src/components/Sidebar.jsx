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

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Simulating vendor data (in a real app, you'd fetch this from the backend)
  const vendor = {
    name: "",
    profilePicture:
      "", // Placeholder image URL; replace with vendor's actual profile picture URL
  };

  const handleLogout = () => {};

  return (
    <>
      {/* Sidebar Toggle Button for Small Screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 p-2 bg-gray-800 lg:hidden fixed top-4 left-4 z-50"
      >
        {isOpen ? "Close" : "Open"} Sidebar
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#56B2E4] text-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-40`}
      >
        {/* Vendor Profile Section */}
        <div className="flex flex-col items-center pt-24 mb-8">
          <img
            src={vendor.profilePicture}
            alt="Vendor Profile"
            className="w-20 h-20 mb-3 rounded-full border-2 border-gray-400"
          />
          <h3 className="text-lg font-semibold">{vendor.name}</h3>
          <p className="text-sm text-gray-400">Vendor</p>
        </div>

        <ul className="flex flex-col space-y-6 px-4">
          <li>
            <Link
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 hover:text-gray-300 transition-colors duration-300"
              to="/dashboard"
            >
              <FaChartLine size={20} />
              <span>Dashboard Overview</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 hover:text-gray-300 transition-colors duration-300"
              to="/dashboard/add-adverts"
            >
              <FaAd size={20} />
              <span>Add an Ad</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 hover:text-gray-300 transition-colors duration-300"
              to="/dashboard/reports"
            >
              <FaDollarSign size={20} />
              <span>Sales</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 hover:text-gray-300 transition-colors duration-300"
              to="/dashboard/settings"
            >
              <FaCog size={20} />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 hover:text-gray-300 transition-colors duration-300 relative"
              to="/dashboard/alerts"
            >
              <FaBell size={20} />
              <span>Alerts</span>
              <span className="absolute top-0 left-20 w-2 h-2 bg-red-500 rounded-full"></span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 hover:text-gray-300 transition-colors duration-300"
              to="/dashboard/verify"
            >
              <FaUserCheck size={20} />
              <span>Get Verified</span>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 hover:text-gray-300 transition-colors duration-300 w-full text-left"
            >
              <FaSignOutAlt size={20} />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
