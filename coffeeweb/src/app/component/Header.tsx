'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="p-4 cursor-pointer fixed w-full z-50 h-[20rem]">
      <div id="pages" className="pl-9 flex justify-between items-center">
        {/* Title */}
        <h1 id="h1" className="text-white   font-bold text-[50px]">
          <i>coffee</i>
        </h1>

        {/* Hamburger Icon (only visible on small screens) */}
        <div
          id="hamburger"
          className="block lg:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          
        </div>

        {/* Navigation Menu */}
        <ul
          id="navMenu"
          className={`${
            menuOpen ? 'menu-links active' : 'menu-links'
          } flex-col lg:flex-row lg:flex gap-2 cursor-pointer justify-between items-center text-white text-[12px]  lg:ml-[65vh]`}
        >
          
          <li className="m-6 ">
            <Link href="/">Home</Link>
          </li>
          <li className="m-6">
            <Link href="/about">About</Link>
          </li>
          <li className="m-6">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="m-6">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="m-6">
            <Link href="/price">Price</Link>
          </li>
        </ul>
        

      </div>
    </header>
  );
};

export default Header;
