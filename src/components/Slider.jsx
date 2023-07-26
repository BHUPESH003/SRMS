// Slider.jsx
import React, { useState, useEffect } from "react";
import { IMAGES } from "../constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % IMAGES.length);
    }, 3000); // Change the duration (in milliseconds) to adjust the sliding speed

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <div className="relative w-full h-72 md:h-96 overflow-hidden">
      <img
        src={IMAGES[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full text-gray-600 shadow-md hover:bg-gray-200 transition duration-300"
        onClick={prevImage}
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full text-gray-600 shadow-md hover:bg-gray-200 transition duration-300"
        onClick={nextImage}
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default Slider;
