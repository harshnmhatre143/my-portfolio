import Link from "next/link";
import React from "react";

const Navbar = () => {
return (
<nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
<div className="navbar flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 md:py-6 mx-auto max-w-7xl">

    <div className="name text-lg sm:text-xl md:text-2xl font-bold text-black">
      <Link href="/">harsh mhatre<span className="text-blue-600">.</span></Link>
    </div>

    <div className="navlinks">
      <ul className="flex gap-3 sm:gap-5 md:gap-8 text-sm sm:text-base">
        <li><Link href="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link></li>
        <li><Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link></li>
        <li><Link href="/skills" className="text-gray-600 hover:text-blue-600 transition">Skills</Link></li>
        <li><Link href="/projects" className="text-gray-600 hover:text-blue-600 transition">Projects</Link></li>
        <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link></li>
      </ul>
    </div>

  </div>
</nav>

);
};

export default Navbar;