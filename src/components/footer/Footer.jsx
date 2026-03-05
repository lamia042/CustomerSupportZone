import React from "react";
import  { FaX, FaLinkedin, FaFacebookF, FaEnvelope } from "react-icons/fa6"; // use fa6

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-8xl mx-auto px-20 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="font-bold text-lg mb-4">CS — Ticket System</h2>
          <p className="text-gray-400 text-sm">
            At SupportZone, we provide reliable support and resources tailored to your needs. Whether you’re looking for expert advice, learning materials, or practical solutions, we make it simple and accessible for everyone.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-semibold mb-4">Social Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><FaX /> @CS — Ticket System</li>
            <li className="flex items-center gap-2"><FaLinkedin /> @CS — Ticket System</li>
            <li className="flex items-center gap-2"><FaFacebookF /> @CS — Ticket System</li>
            <li className="flex items-center gap-2"><FaEnvelope /> support@cst.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 border-t border-gray-800 pt-4 text-gray-500 text-center text-sm">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;