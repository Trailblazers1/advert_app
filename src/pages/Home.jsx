import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pic from "../pages/images/bg.webp";

import { useState, useEffect } from "react";
import { apiGetAdverts } from "../services/product";
import AddbookTile from "./Vendordashboard/GetTiles";


import TypewriterComponent from "typewriter-effect";


function Home() {
    const [homeadds, setHomeadds] = useState([]);

    const getAdds = async () => {
         const response = await apiGetAdverts()

        //  axios.get(`${import.meta.env.VITE_BASE_URL}/adverts?,limit=0`);
        setHomeadds(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getAdds();
    }, [])



  return (
    <div
      className="min-h-screen overflow-x-hidden pt-20"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto mt-20 mb-10 max-w-[95%]">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full pr-0 lg:pr-10 mb-10 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-4">
            Advertising and Monetization Platform for Advertisers
          </h1>
          <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
            Adport is a self-serve advertising network that offers 360º
            monetization solutions and high-quality traffic to
            performance-oriented advertisers. Start earning more money through a
            multi-format (Push Notifications, Pops, In-Page Push, Direct Links,
            Interstitials, and Rich Media) performance-driven advertising
            platform built for webmasters, app developers, advertisers,
            affiliates, agencies, and ad networks.
          </p>
          <h3 className="text-xl lg:text-2xl font-semibold text-[#036CDB] mb-6">
            Money making begins here
          </h3>

          {/* Search Form */}
          <form className="flex flex-col lg:flex-row justify-center items-center gap-2 mt-4 relative">
            <input
              type="text"
              placeholder="Search for an ad by title"
              className="border border-gray-300 rounded-full p-3 w-full lg:max-w-[400px] focus:outline-none focus:border-blue-400 shadow-md"
            />
            <button
              type="submit"
              className="bg-[#036CDB] text-white p-3 rounded-full w-full lg:w-[120px] font-bold hover:bg-[#024fa1] transition-all duration-300"
            >
              Search
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <div
            className="relative overflow-hidden rounded-xl mx-auto"
            style={{
              width: "100%",
              maxWidth: "762px",
              height: "auto",
              aspectRatio: "16/9",
            }}
          >
            <img
              src={pic}
              alt="Adport Background"
              className="w-full h-full object-cover transform transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div>
            <h1>ALL ADVERTS</h1>
            <div>
                {
                    homeadds.map((homeadd) => {
                        // return <Link to={`adds/${add.id}`}>
                            <AddbookTile title={homeadd.title}
                                icon={homeadd.icon}
                              description={homeadd.description}
                              price={homeadd.price} 
                              category={homeadd.category} 
                            />
                        // </Link>

                    }

                    )
                }
            </div>
        </div>

      <Footer />
    </div>
  );
}

export default Home;
