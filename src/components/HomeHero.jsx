import React from "react";
import { Link } from "react-router-dom";
import { HERO_DATA } from "../constants";
import { HERO_IMG } from "../constants";

const HomeHero = () => {
  const containerStyle = {
    backgroundImage: "url('https://www.farmery.in/Farmerynew/img/background_flowers.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="herocontainer flex justify-center flex-col items-center p-4"
      style={containerStyle}
    >
      <div className="bg-white rounded-lg w-11/12 md:w-3/4 flex justify-center flex-col">
        <div className="container shadow-2xl mx-auto px-4 py-8 sm:py-12 flex flex-col items-center sm:flex-row sm:items-start sm:justify-center ">
          {/* Add your image here */}
          <img
            src={HERO_IMG}
            alt="Your Image"
            className="md:w-1/2 items-center mb-4 sm:mb-0 sm:mr-4 md:pt-16 rounded-b-lg rounded-t-lg"
          />
          {/* Add your data here */}
          <p className="text-sm text-center sm:text-lg sm:text-left">
            {HERO_DATA.content}
          </p>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/whyus">
          <button className="px-6 py-3 bg-blue-600 rounded-md shadow-md hover:bg-blue-700">
            {HERO_DATA.buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
