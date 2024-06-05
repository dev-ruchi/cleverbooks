import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center h-screen text-gray-700 flex items-center md:justify-center bg-[url('/book.jpeg')]"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to CleverBooks</h1>
          <p className="text-2xl mt-4">
            Innovation and Creativity in Book Management
          </p>
          <a
            href="#cta"
            className="mt-8 inline-block bg-orange-500 text-white py-4 px-8 rounded"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
