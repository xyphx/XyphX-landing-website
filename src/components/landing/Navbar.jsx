'use client';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';
import '@/app/globals.css';


export default function Navbar({ showAbout, toggleAbout }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1F002D] border-b border-white font-wallpoet z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        
        {/* Left: social icons */}
        <div className="flex space-x-4 text-2xl">
          <Link href="#"><FaLinkedin /></Link>
          <Link href="#"><FaInstagram /></Link>
          <Link href="#"><HiOutlineMail /></Link>
        </div>

        {/* Center: Products + dropdown */}
        <div className="relative group wallpoet">
          <button className="uppercase text-2xl ">Products</button>
          <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-[#1F002D] border border-white uppercase text-lg">
            <li className="px-6 py-2 hover:bg-gray-700">XyphX OS</li>
            <li className="px-6 py-2 hover:bg-gray-700">XyphX BOT</li>
            <li className="px-6 py-2 hover:bg-gray-700">Waiting</li>
          </ul>
        </div>

        {/* Right: About/Home toggle */}
        <button
          onClick={toggleAbout}
          className="uppercase text-xl"
        >
          {showAbout ? 'Home' : 'About'}
        </button>
      </div>
    </nav>
  );
}
