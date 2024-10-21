import pic from "../assets/images/logo2.png";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center px-4">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img src={pic} alt="adport logo" className="mb-10" />

          <div className="mb-4">
            <p className="text-lg">Follow us at:</p>
          </div>
          <div className="flex space-x-4 text-2xl">
            <a href="" className="hover:text-[#E1306C]">
              <FaInstagram />
            </a>
            <a href="" className="hover:text-[#3b5998]">
              <FaFacebookSquare />
            </a>
            <a href="" className="hover:text-[#FF0000]">
              <FaYoutube />
            </a>
            <a href="" className="hover:text-[#1DA1F2]">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
          <div className="space-x-4 lg:space-x-6">
            <a href="" className="hover:text-gray-400">
              Home
            </a>
            <a href="" className="hover:text-gray-400">
              About Us
            </a>
            <a href="" className="hover:text-gray-400">
              Contact
            </a>
            <a href="" className="hover:text-gray-400">
              Blog
            </a>
          </div>
          <div className="space-x-4 lg:space-x-6">
            <a href="" className="hover:text-gray-400">
              Cookies policies
            </a>
            <a href="" className="hover:text-gray-400">
              Legal notice
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex justify-center lg:justify-end items-center">
          <p className="text-sm text-gray-400" id="copyright">
            Copyright &copy; 2024 adport. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
