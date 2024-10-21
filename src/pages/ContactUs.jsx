import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backgroundImg from "../pages/images/bg.jpg";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative w-full h-screen bg-cover bg-center min-h-screen flex items-center justify-center p-6 pt-28"
        style={{ backgroundImage: `url('${backgroundImg}')` }}
      >
        <div className="bg-white shadow-lg rounded-lg p-8 md:w-2/3 lg:w-1/2 w-full animate-fadeIn">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-slideInUp">
            Get in Touch
          </h2>

          <form className="space-y-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-transform transform hover:scale-105 duration-300"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-transform transform hover:scale-105 duration-300"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 h-32 transition-transform transform hover:scale-105 duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold p-3 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-600">Or reach us at:</p>
            <p className="text-lg font-semibold text-gray-800">
              contact@adport.com
            </p>
            <div className="flex justify-center mt-4 space-x-4">
              <a
                href="#"
                className="text-gray-800 hover:text-purple-600 transition-transform transform hover:scale-110 duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-purple-600 transition-transform transform hover:scale-110 duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-purple-600 transition-transform transform hover:scale-110 duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
