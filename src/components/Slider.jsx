import React, { useState, useEffect } from "react";
import { IMAGES } from "../constants";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % IMAGES.length);
    }, 6000); // Change the duration (in milliseconds) to adjust the sliding speed

    return () => clearInterval(interval);
  }, []);

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
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Conditionally render the arrows based on screen size */}
      {window.innerWidth >= 768 && (
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
      )}
    </div>
  );
};

export default Slider;
