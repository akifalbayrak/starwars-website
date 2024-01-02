import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <ul className="flex items-center space-x-4">
        <li>
          <a href="/" className="hover:text-blue-500">
            Main Page
          </a>
        </li>
        <li>
          <a href="/planets" className="hover:text-blue-500">
            Planets
          </a>
        </li>
        <li>
          <a href="/people" className="hover:text-blue-500">
            People
          </a>
        </li>
        <li>
        <a href="/films" className="hover:text-blue-500">
            Films
          </a>
        </li>
        <li>
        <a href="/vehicles" className="hover:text-blue-500">
            Vehicles
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
