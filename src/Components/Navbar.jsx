import React, { useEffect, useState } from 'react'
import { VscEyeClosed } from "react-icons/vsc";
import { FaBars } from 'react-icons/fa';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll';
import nielitlogo from '../assets/NIELIT-Logo.png';

const Navbar = () => {
  useEffect(() => {
    Aos.init();
  }, [3000])
  const [isMeanuOpen, SetIsMeanuClosed] = useState(false);

  const toggelmenu = () => {
    SetIsMeanuClosed(!isMeanuOpen);
  }
  const navItems = [
    { link: "Recognitions", path: "recognitions" },
    { link: "Opportunities", path: "opportunities" },
    { link: "Fees Structure", path: "fees-Structure" },
    { link: "Job prospects", path: "job-prospects" },
  ]
  return (
    <>
      <nav data-aos="fade-down" className='bg-white md:px-14  max-w-screen-2xl mx-auto border-b text-primary fixed top-0 right-0 left-0'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
          <div className='flex space-x-14 items-center'>
            <a className='text-xl font-semibold flex items-center space-x-6 text-primary' href="/">
              <a href="https://www.nielit.gov.in/haridwar/index.php" target="_blank">
                <img src={nielitlogo} alt="" className='w-28 p-2 inline-block items-center' />
              </a>
              <span>IT Application Engineer (B Level - IT) </span></a>
          </div>
          {/* Showing Navitem using map */}
          <div className='flex space-x-14 items-center'>
            <ul className='md:flex space-x-6 mt-1 hidden'>
              <a href="https://www.nielit.gov.in/haridwar/index.php" target="_blank" className='block hover:text-gray-300 cursor-pointer'>Home</a>
              {
                navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</Link>)
              }
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrdGfCxkBZUpML6RhMswdGcdcrmbJoU2onw8rAJOSZUFJYHg/viewform" target="_blank" className='block hover:text-gray-300 cursor-pointer'><button
                className='py-1 -mt-1 px-6 bg-secondary text-white font-semibold rounded hover:bg-primary transition-all duration-300'>Apply</button></a>
            </ul>
          </div>

          {/* main btn only for mobile display */}
          <div className='md:hidden'>
            <button onClick={toggelmenu} className='text-white focus:outline-none focus:text-gray-300'>
              {
                isMeanuOpen ? (<VscEyeClosed className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary' />)
              }
            </button>
          </div>

        </div>
      </nav>

      {/* navitems for mobile device===#=#====- - - - - - - - - */}
      <div className={`space-y-4 px-4 pt-24 pb-5 z-10 bg-secondary text-xl ${isMeanuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        {
          navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300'>{link}</Link>)
        }
      </div>
    </>
  )
}

export default Navbar
