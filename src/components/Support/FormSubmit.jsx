import React, { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import Modal from './Modal';
import ContactSvg from '../../assets/images/hero-img-up.avif'; // Replace this with the actual SVG path

const FormComponent = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    query: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useNavigation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any form validation or submission logic here
    // For simplicity, let's assume the form is valid

    setIsSubmitted(true);
    setFormData(initialFormData)

    // Navigate to a new page using react-router-dom (optional)
    history.push('/dashboard');
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="w-full mx-auto bg-white shadow-md rounded-md p-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-4 md:mb-0">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">Name:</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 border-b border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">E-mail:</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border-b border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Phone:</label>
              <input
                type="tel"
                name="phone"
                className="w-full p-3 border-b border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={formData.phone}
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Query:</label>
              <textarea
                name="query"
                className="w-full p-3 border-b border-gray-300 rounded focus:outline-none focus:border-blue-500"
                rows="4"
                onChange={handleChange}
                value={formData.query}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition-all duration-200"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8">
          {/* Replace ContactSvg with your actual SVG component */}
          <img src={ContactSvg} alt="Contact" className="w-full rounded-md opacity-70" />
        </div>
      </div>
      <Modal isOpen={isSubmitted} closeModal={closeModal} />
    </div>
  );
};

export default FormComponent;
