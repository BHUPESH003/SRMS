import React, { useState, useEffect } from "react";
import { IMAGES } from "../../constants";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);


  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + IMAGES.length) % IMAGES.length
    );
  };

  return (
    <div className="relative w-full h-72 md:h-[450px] overflow-hidden">
     
      {IMAGES.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
            currentImage === index ? "translate-x-0" : "translate-x-full"
          }`}
        />
      ))}
      {/* Conditionally render the arrows based on screen size */}
  
        <>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full text-black-600 shadow-md hover:bg-gray-200 transition duration-600"
            onClick={prevImage}
          >
            <BsArrowLeftShort size={30} />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full text-black-600 shadow-md hover:bg-gray-200 transition duration-600"
            onClick={nextImage}
          >
            <BsArrowRightShort size={30} />
          </button>
        </>
      
    </div>
  );
};

export default Slider;
