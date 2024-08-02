import React from "react";
import logo from '../../assets/images/logo.png'; // Ensure the path is correct
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between bg-black h-16 p-4 text-base sm:text-xl font-bold sticky top-0">
        <img src={logo} alt="logo not found" className="h-16 sm:h-16 ml-2 sm:ml-10" />
        <div className="w-auto flex items-center mr-2 sm:mr-10 text-white">
          <ul className="flex space-x-2 sm:space-x-4 lg:space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300 text-sm sm:text-base">Home</Link>
            </li>
            <li>
              <Link to="/movies" className="hover:text-gray-300 text-sm sm:text-base">Movies</Link>
            </li>
            {/* <li>
              <Link to="/yourmovies" className="hover:text-gray-300 text-sm sm:text-base">Your Movies</Link>
            </li> */}
            <li>
              <Link to="/" className="hover:text-gray-300 text-sm sm:text-base">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
