import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PAGES } from "../constants";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa"; // Import the required icons
import Logo from "../assets/images/logo.jpg.png"; // Replace with the path to your logo image
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="text-white p-4 flex justify-between items-center NavBar" style={{ backgroundColor: '#0099cc' }}>
      <div className="flex items-center">
        <button
          onClick={handleMenuToggle}
          className="md:hidden text-2xl focus:outline-none mr-4"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Use the menu and close icons */}
        </button>
        <img src={Logo} alt="Logo" className={`h-12 ${isMenuOpen ? "hidden md:block" : ""}`} />
      </div>

      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="nav-menu"
        unmountOnExit
      >
        <ul className="flex flex-col items-center md:flex md:flex-row md:items-center">
          {PAGES.map((page) => (
            <li
              key={page.name}
              className="font-semibold text-base md:text-xl mr-4 transition duration-300 ease-in-out hover:opacity-75"
            >
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </CSSTransition>

      {!isMenuOpen && (
        <div className="flex items-center">
          <ul className="flex flex-col items-center md:flex md:flex-row md:items-center mobile">
            {PAGES.map((page) => (
              <li
                key={page.name}
                className="font-semibold text-base md:text-xl mr-4 transition duration-300 ease-in-out hover:opacity-75"
              >
                <Link to={page.path}>{page.name}</Link>
              </li>
            ))}
          </ul>
          <Link to={'/profile'} >
          <FaUserCircle className="text-2xl md:text-xl ml-4" /> {/* Avatar icon at the flex end */}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
