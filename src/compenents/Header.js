import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AkiraLogo from './assets/pictures/Icons/AkiraLogoTransparent.webp';
import { XIcon, MenuIcon } from '@heroicons/react/outline';

const Header = () => {
  const [nav, setNav] = useState(false); // Set initial state to false

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header>
      <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
        <h1 className='text-3xl font-bold text-[#FF0033] m-4'>
          <img
            className='h-12 inline-block'
            src={AkiraLogo}
            alt='nashville-tech-solutions'
          ></img>
          Akira Web Solutions
        </h1>
        <ul className='hidden md:flex font-mono text-black'>
          <li className='p-4'>
            <Link to='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link to='/solutions'>Solutions</Link>
          </li>
          <li className='p-4'>
            <Link to='/Pricing'>Pricing</Link>
          </li>
          <li className='p-4'>
            <Link to='/CaseStudies'>Case Studies</Link>
          </li>
          <li className='p-4'>
            <Link to='/Connect'>Contact</Link>
          </li>
        </ul>

        <div
          onClick={handleNav}
          className='block md:hidden fixed top-5 right-6 text-black'
        >
           {/* Use Tailwind CSS classes for responsive display */}
           {nav ? (
  <XIcon
    className={`text-black h-10 sm:block`}
  />
) : (
  <MenuIcon
    className={`text-black h-10 sm:block`}
  />
)}


        </div>
          

        <div
          className={`${
            nav ? 'block' : 'hidden'
          } md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 text-black  z-50`}
        >
          <h1 className='w-full text-xl font-bold text-[#FF0033] m-4'>
            <img
              className='h-12 inline-block'
              src={AkiraLogo}
              alt='Akira Logo'
            ></img>
            Akira Web Solutions
          </h1>

          <ul className='pt-12 uppercase text-black'>
            <li className='p-4 border-b  border-gray-600'>
              <Link to='/'>Home</Link>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <Link to='/solutions'>Solutions</Link>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <Link to='/Pricing'>Pricing</Link>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <Link to='/CaseStudies'>Case Studies</Link>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <Link to='/Connect'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
