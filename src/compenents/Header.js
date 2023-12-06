import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import AkiraLogo from './assets/pictures/Icons/AkiraLogo2.webp';
import { XIcon, MenuIcon } from '@heroicons/react/outline';



const Header = () => {

  //importing state for navbar toggle
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header>
      <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
        <h1 className='text-3xl font-bold text-[#FF0033] m-4'> <img className="h-12 inline-block" src={AkiraLogo} alt="nashville-tech-solutions" ></img>Akira Web Solutions</h1>
        <ul className='hidden md:flex font-mono text-black'>
          <li className='p-4' >
            <Link to="/" >
              Home
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to="/solutions"
            >
              Solutions
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to="/Pricing"
            >
              Pricing
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to="/CaseStudies"
            >
              Case Studies
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to="/Connect"
            >
              Contact
            </Link>
          </li>
        </ul>


        <div onClick={handleNav} className='block md:hidden fixed top-5 right-6 text-black'>
          {/* if else statement to show navbar state */}
          {!nav ? <XIcon size={20}/> :    <MenuIcon size={20} /> }
        </div>

    {/* Second menu (for side Navbar) */}

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 text-black  z-50' : "fixed left-[-100%]"}>
                  <h1 className='w-full text-xl font-bold text-[#FF0033] m-4'> <img className="h-12 inline-block" src={AkiraLogo} alt="Akira Logo" ></img>Akira Web Solutions</h1>

          <ul className='pt-12 uppercase text-black'>
        <li className='p-4 border-b  border-gray-600' >
            <Link to="/" >
              Home
            </Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
          <Link
              to="/solutions"
            >
              Solutions
            </Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
          <Link
              to="/Pricing"
            >
              Pricing
            </Link>
          </li> 
          <li className='p-4 border-b border-gray-600'>
          <Link
              to="/CaseStudies"
            >
              Case Studies
            </Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
