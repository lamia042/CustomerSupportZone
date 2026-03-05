import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        
        {/* Brand Logo */}
        <div className="text-xl font-bold text-slate-900">
          CS — Ticket System
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-3 text-sm font-medium text-gray-600">
          <li className="hover:text-purple-600 cursor-pointer">Home</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
          <li className="hover:text-purple-600 cursor-pointer">Changelog</li>
          <li className="hover:text-purple-600 cursor-pointer">Blog</li>
          <li className="hover:text-purple-600 cursor-pointer">Download</li>
          <li className="hover:text-purple-600 cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Button */}
        <div className=" md:block">
          <button className="flex items-center px-6 py-2.5 text-white text-sm font-semibold rounded-lg 
            bg-gradient-to-r from-[#7C3AED] to-[#A855F7] 
            hover:from-[#6D28D9] hover:to-[#9333EA] 
            shadow-md shadow-purple-200 transition-all active:scale-95">
            <span className="mr-2 text-lg leading-none">+</span> New Ticket
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 text-sm font-medium text-gray-600">
          <li className="hover:text-purple-600 cursor-pointer list-none">Home</li>
          <li className="hover:text-purple-600 cursor-pointer list-none">FAQ</li>
          <li className="hover:text-purple-600 cursor-pointer list-none">Changelog</li>
          <li className="hover:text-purple-600 cursor-pointer list-none">Blog</li>
          <li className="hover:text-purple-600 cursor-pointer list-none">Download</li>
          <li className="hover:text-purple-600 cursor-pointer list-none">Contact</li>

          {/* <button className="w-full flex justify-center items-center px-6 py-2.5 text-white text-sm font-semibold rounded-lg 
            bg-gradient-to-r from-[#7C3AED] to-[#A855F7] 
            shadow-md shadow-purple-200 transition-all active:scale-95">
            <span className="mr-2 text-lg leading-none">+</span> New Ticket
          </button> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;