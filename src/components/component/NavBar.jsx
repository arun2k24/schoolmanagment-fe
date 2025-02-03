import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-lg w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        
        {/* Logo */}
        <h2 className="font-bold text-lg sm:text-2xl text-center sm:text-left">
          Rayan International School
        </h2>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 lg:space-x-8 text-sm sm:text-lg mt-3 sm:mt-0">
          <li><Link to="/" className="hover:text-orange-300">Home</Link></li>
          <li><Link to="/academics" className="hover:text-orange-300">Academics</Link></li>
          <li><Link to="/gallery" className="hover:text-orange-300">Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-orange-300">Contact</Link></li>
          <li><Link to="/aboutus" className="hover:text-orange-300">About Us</Link></li>
          <li><Link to="/login" className="hover:text-orange-300">Login</Link></li>
          <li><Link to="/register" className="hover:text-orange-300">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
