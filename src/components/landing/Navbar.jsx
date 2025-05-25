'use client';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';

export default function Navbar({ showAbout, toggleAbout }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1F002D] z-50 font-wallpoet border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* left : social icons */}
        <div className="flex space-x-4 text-white text-2xl">
          <Link href="#"><FaLinkedin /></Link>
          <Link href="#"><FaInstagram /></Link>
          <Link href="#"><HiOutlineMail /></Link>
        </div>

        {/* center : PRODUCTS + dropdown */}
        <div className="relative">
          <button
            onClick={() => {}}
            className="text-white text-4xl uppercase tracking-wider"
          >
            Products
          </button>
          {/* …your dropdown here… */}
        </div>

        {/* right : toggle Home / About */}
        <button
          onClick={toggleAbout}
          className="text-white text-xl uppercase"
        >
          {showAbout ? 'Home' : 'About'}
        </button>
      </div>
    </nav>
  );
}
