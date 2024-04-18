import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./assets/pictures/bannerWeb.png"; // Make sure to use the correct path to your image

const Hero = () => {
  const navigate = useNavigate();

  const handleViewContact = () => {
    navigate("/connect");
  };

  return (
    <div
      className="relative bg-black overflow-hidden "
      style={{ height: "65vh" }}
    >
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-transparent to-red-500 opacity-75"></div>

      {/* Text Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
        <h2 className="text-2xl  sm:text-1xl md:text-2xl lg:text-3xl text-white">
        Grow Your Business Online 
        <br/>
        with Akira Web Solutions 
          </h2>
        <p className="text-md md:text-lg text-white max-w-2xl mx-auto mt-4">
          {" "}
          {/* Increased max-width here */}
          Nashville's Solution to SEO, E-commerce, Web Design, and AI 
        </p>
        <button
          onClick={handleViewContact}
          className="mt-6 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition duration-300"
        >
          Get a Free Quote Today!
        </button>
      </div>
    </div>
  );
};

export default Hero;
