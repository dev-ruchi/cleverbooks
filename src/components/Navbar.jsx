import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center p-4 md:py-4">
          <a href="#" className="text-2xl font-bold">
            CleverBooks
          </a>
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li>
              <a href="#section1">Product</a>
            </li>
            <li>
              <a href="#section2">Pricing</a>
            </li>
            <li>
              <a href="#section3">Industry</a>
            </li>
            <li>
              <a href="#section4">Customer Stories</a>
            </li>
            <li>
              <a href="#section5">About</a>
            </li>
            <li>
              <a href="#section6">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
