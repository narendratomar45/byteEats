import React from "react";
import logo from "../assets/images/logo.webp";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 ">
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="ByteEats Logo" className="w-24 h-24 mb-3" />
          <p className="text-gray-400 text-sm text-center md:text-left">
            ByteEats - Discover the best food & drinks in your city.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">About ByteEats</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-400 text-sm">Email: support@byteeats.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 98765 43210</p>
          <p className="text-gray-400 text-sm">Location: New Delhi, India</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-blue-500 hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-pink-500 hover:text-white transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaSquareXTwitter size={20} />
            </a>
            <a href="#" className="text-blue-400 hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm  border-t border-gray-700 pt-3  flex justify-center items-center">
        © {new Date().getFullYear()} ByteEats. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
