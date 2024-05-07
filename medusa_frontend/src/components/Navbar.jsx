import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import coffeeIcon from '../assets/icons8-coffee-50.png';
import Regions from './Regions'; // Import the Regions component
import checkoutIcon from '../assets/checkoutIcon.png';

export const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false); // State to track menu visibility
  const [isBasketOpen, setIsBasketOpen] = useState(false); // State to track basket visibility

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
    setShowMenu(true); // Open the side menu when the basket is toggled
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleCheckoutClick = () => {
    closeMenu(); // Close the side menu when Checkout is clicked
  };

  return (
    <nav className="bg-[#1E1E1E]">
      {/* Burger menu button for medium screen size and below */}
      <button
        className="md:hidden"
        onClick={toggleMenu} // Call toggleMenu directly on click
      >
        {/* Burger menu icon */}
        <svg
          className="h-6 w-6 fill-current text-white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 4h16a1 1 0 010 2H2a1 1 0 010-2zm0 6h16a1 1 0 010 2H2a1 1 0 010-2zm0 6h16a1 1 0 010 2H2a1 1 0 010-2z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      {/* Side menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-white transition-transform duration-300 z-30 ${
          showMenu ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        {/* Close button */}
        <button className="absolute top-4 right-4" onClick={closeMenu}>
          <svg
            className="h-6 w-6 fill-current text-black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Content of the side menu */}
        {/* You can add your menu items and links here */}
        <div className="p-4">
          <h2 className='text-6xl text-center font-Inspiration mt-24 mb-8'>Shopping Cart</h2>
          <NavLink to="/Checkoutpage" onClick={handleCheckoutClick}>
            <button className='border-[#1E1E1E] rounded-lg bg-[#1E1E1E] px-20 py-5 text-white'>Checkout</button>
          </NavLink>
        </div>
      </div>

      {/* Right-aligned elements */}
      <div
        className={`flex justify-end h-16 px-8 gap-6 ${
          'hidden md:flex' // Show the menu on medium screens and below
        }`}
      >
        <Regions />
        <button onClick={toggleBasket}> {/* Button for toggling the basket */}
          <img className="h-10 px-8 my-12" src={checkoutIcon} alt="basket" />
        </button>
        {props.links.map((link, index) => (
          <NavLink
            key={index}
            to={link.link}
            className="text-white hover:opacity-75 my-12 "
          >
            <img className="h-10" src={link.icon} alt={link.name} />
          </NavLink>
        ))}
      </div>

      {/* Heading and centered element */}
      <div className="flex justify-center items-center flex-col h-16 px-8 border-r-16">
        <h4 className="text-white overflow-visible z-20 font-Inspiration text-5xl">
          Sunshine Coffee
        </h4>
        <NavLink
          to={props.frontpageLink.link}
          className="flex justify-center items-center h-full px-8 z-10"
        >
          <div className="rounded-full border border-[#1E1E1E] p-16 sm:p-16 md:p-20 lg:p-24 bg-[#1E1E1E]">
            <img
              src={coffeeIcon}
              alt="Coffee Icon"
              className="h-8 sm:h-8 md:h-12 lg:h-20"
            />
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

