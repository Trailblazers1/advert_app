import React, { useState, useEffect } from "react";

const Ads = () => {
  const [ads, setAds] = useState([
    { id: 1, title: "Ad 1", description: "This is the first ad." },
    { id: 2, title: "Ad 2", description: "This is the second ad." },
    { id: 3, title: "Ad 3", description: "This is the third ad." },
    { id: 4, title: "Ad 4", description: "This is the fourth ad." },
    { id: 5, title: "Ad 5", description: "This is the fifth ad." },
  ]);
  const [newAd, setNewAd] = useState({ title: "", description: "" });
  const [error, setError] = useState(""); // For form validation
  const [filter, setFilter] = useState(""); // For filtering ads
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [adsPerPage] = useState(2); // Ads per page
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  // Handle input change
  const handleChange = (e) => {
    setNewAd({ ...newAd, [e.target.name]: e.target.value });
  };

  // Create a new ad with validation
  const createAd = () => {
    if (newAd.title === "" || newAd.description === "") {
      setError("Both fields are required.");
    } else {
      const newAdEntry = { ...newAd, id: Date.now() };
      setAds([...ads, newAdEntry]);
      setNewAd({ title: "", description: "" });
      setError("");
    }
  };

  // Edit an ad
  const editAd = (id, updatedAd) => {
    setAds(ads.map((ad) => (ad.id === id ? updatedAd : ad)));
  };

  // Remove an ad
  const removeAd = (id) => {
    setAds(ads.filter((ad) => ad.id !== id));
  };

  // Filter ads by title
  const filteredAds = ads.filter((ad) =>
    ad.title.toLowerCase().includes(filter.toLowerCase())
  );

  // Pagination logic
  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  const currentAds = filteredAds.slice(indexOfFirstAd, indexOfLastAd);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`p-6 min-h-screen ${
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      } transition duration-300`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1
          className={`text-3xl font-bold ${
            isDarkMode ? "text-white" : "text-gray-900"
          } transition duration-300`}
        >
          Manage Advertisements
        </h1>
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-lg ${
            isDarkMode ? "bg-gray-600 text-white" : "bg-blue-600 text-white"
          } transition hover:bg-blue-700`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Filter Ads */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search ads by title"
          className={`px-4 py-2 border rounded-lg w-full ${
            isDarkMode
              ? "bg-gray-600 text-white border-gray-500"
              : "border-gray-300"
          }`}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Ad Creation Form */}
      <div
        className={`p-6 rounded-lg shadow-md mb-8 ${
          isDarkMode ? "bg-gray-700 text-white" : "bg-white"
        } transition duration-300`}
      >
        <h2 className="text-xl font-semibold mb-4">Create New Ad</h2>
        <div className="mb-4">
          <label className="block">Ad Title:</label>
          <input
            type="text"
            name="title"
            value={newAd.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg mt-2 ${
              isDarkMode
                ? "bg-gray-600 text-white border-gray-500"
                : "border-gray-300"
            }`}
            placeholder="Enter ad title"
          />
        </div>
        <div className="mb-4">
          <label className="block">Ad Description:</label>
          <textarea
            name="description"
            value={newAd.description}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg mt-2 ${
              isDarkMode
                ? "bg-gray-600 text-white border-gray-500"
                : "border-gray-300"
            }`}
            placeholder="Enter ad description"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={createAd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create Ad
        </button>
      </div>

      {/* List of Ads */}
      <div className="grid gap-6 lg:grid-cols-2 sm:grid-cols-1">
        {currentAds.length > 0 ? (
          currentAds.map((ad) => (
            <AdCard
              key={ad.id}
              ad={ad}
              editAd={editAd}
              removeAd={removeAd}
              isDarkMode={isDarkMode}
            />
          ))
        ) : (
          <p className="text-gray-500">
            No ads available. Create some ads to get started!
          </p>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        adsPerPage={adsPerPage}
        totalAds={filteredAds.length}
        paginate={paginate}
        currentPage={currentPage}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

// AdCard Component to Display Each Ad
const AdCard = ({ ad, editAd, removeAd, isDarkMode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedAd, setUpdatedAd] = useState({ ...ad });

  const handleEditChange = (e) => {
    setUpdatedAd({ ...updatedAd, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    editAd(ad.id, updatedAd);
    setIsEditing(false);
  };

  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        isDarkMode ? "bg-gray-700 text-white" : "bg-white"
      } transition duration-300`}
    >
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={updatedAd.title}
            onChange={handleEditChange}
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <textarea
            name="description"
            value={updatedAd.description}
            onChange={handleEditChange}
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <button
            onClick={saveEdit}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-2">{ad.title}</h3>
          <p className="mb-4">{ad.description}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => removeAd(ad.id)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

// Pagination Component
const Pagination = ({
  adsPerPage,
  totalAds,
  paginate,
  currentPage,
  isDarkMode,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAds / adsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-6">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`mx-1 ${currentPage === number ? "font-bold" : ""}`}
          >
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-lg transition ${
                isDarkMode
                  ? "bg-gray-600 text-white hover:bg-gray-500"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ads;
