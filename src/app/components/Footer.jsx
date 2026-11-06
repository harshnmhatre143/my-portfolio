"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";




const Footer = () => {
   
    return (
      <footer className="w-full border-t border-gray-200 bg-white px-6 md:px-20 py-4">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">

                <div className="text-xl font-bold text-gray-900">
                    harsh mhatre<span className="text-blue-600">.</span>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <Link href="/about" className="hover:text-blue-600">About</Link>
                    <Link href="/skills" className="hover:text-blue-600">Skills</Link>
                    <Link href="/projects" className="hover:text-blue-600">Projects</Link>
                    <Link href="/contact" className="hover:text-blue-600">Contact</Link>
                </div>

                <div className="flex gap-5 text-gray-600">
                    <a href="https://github.com/harshnmhatre143" target="_blank" rel="noreferrer">
                        <FaGithub size={20} />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="mailto:your-email@example.com" aria-label="Email">
                        <Mail size={20} />
                    </a>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-gray-100 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Harsh Mhatre. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;