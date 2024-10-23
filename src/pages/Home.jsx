import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pic from "../pages/images/bg.webp";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import { apiGetAdverts } from "../services/product";
import TypewriterComponent from "typewriter-effect";

function Home() {
  const [adds, setAdds] = useState([]);
  const [filteredAdds, setFilteredAdds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const getAdds = async () => {
    const response = await apiGetAdverts();
    setAdds(response.data);
    setFilteredAdds(response.data); // Initialize filteredAdds
    console.log(response.data);
  };

  useEffect(() => {
    getAdds();
  }, []);

  const debouncedSearch = debounce((query) => {
    const filtered = adds.filter((add) => {
      return (
        add.title.toLowerCase().includes(query) ||
        add.category.toLowerCase().includes(query) ||
        add.price.toString().includes(query)
      );
    });

    setFilteredAdds(filtered);
    setShowSuggestions(true);
  }, 300);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const handleAddClick = () => {
    setShowSuggestions(false);
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden pt-20"
      style={{ backgroundColor: "#E5EDE9" }}
    >
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto mt-20 mb-10 max-w-[95%]">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full pr-0 lg:pr-10 mb-10 lg:mb-0 text-2xl font-bold">
          <TypewriterComponent
            options={{
              strings: [
                "Advertising and Monetization Platform for Advertisers",
                "Start Earning with Adport Now",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
          <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
            Adport is a self-serve advertising network that offers 360º
            monetization solutions and high-quality traffic to
            performance-oriented advertisers...
          </p>
          <h3 className="text-xl lg:text-2xl font-semibold text-[#036CDB] mb-6">
            Money making begins here
          </h3>

          {/* Search Form */}
          <form className="flex flex-col lg:flex-row justify-center items-center gap-2 mt-4 relative">
            <input
              type="text"
              placeholder="Search for an ad by title/category"
              className="border border-gray-300 rounded-full p-3 w-full lg:max-w-[400px] focus:outline-none focus:border-blue-400 shadow-md"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button
              type="submit"
              className="bg-[#036CDB] text-white p-3 rounded-full w-full lg:w-[120px] font-bold hover:bg-[#024fa1] transition-all duration-300"
              disabled
            >
              Search
            </button>
          </form>

          {showSuggestions && searchQuery && (
            <ul className="absolute z-10 bg-white border border-gray-300 shadow-md rounded-md mt-2 w-full max-w-[400px]">
              {filteredAdds.slice(0, 5).map((add, index) => (
                <li
                  key={index}
                  className="p-3 hover:bg-blue-100 cursor-pointer"
                  onClick={handleAddClick}
                >
                  <span className="font-semibold">{add.title}</span> by{" "}
                  {add.category}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <div className="relative overflow-hidden rounded-xl mx-auto">
            <img
              src={pic}
              alt="Adport Background"
              className="w-full h-full object-cover transform transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Ads Section */}
      <h1 className="text-2xl font-bold text-center mt-10">ALL ADVERTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredAdds.map((homeadd) => (
          <Link
            to={`homeadds/${homeadd.id}`}
            key={homeadd.id}
            className="relative block p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:bg-gray-100 transition duration-300"
          >
            <div className="flex items-center space-x-4">
              <img
                src={`https://savefiles.org/${homeadd.icon}?shareable_link=437`}
                alt={homeadd.title}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {homeadd.title}
                </h3>
                <p className="text-sm text-gray-600">{homeadd.category}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">{homeadd.description}</p>
            <span className="absolute bottom-6 right-6 text-lg font-semibold text-blue-600">
              ${homeadd.price}
            </span>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
