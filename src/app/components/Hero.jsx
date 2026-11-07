import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-150px)] flex items-center px-6 md:px-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-4">

        {/* Left Section */}
        <div>
          <p className="text-blue-600 font-medium 	text-xl sm:text-2xl mb-4">
            Hello, I'm
          </p>

          <h1 className="	text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-5">
            Harsh Mhatre
          </h1>

          <h2 className="	text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
            Full Stack Web Developer
          </h2>

          <p className="text-gray-500 	text-base md:text-lg max-w-2xl leading-8 mb-8">
            I build modern, responsive and user-friendly web applications.
            I enjoy turning ideas into functional digital experiences using
            modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/projects"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              View My Projects
            </Link>

            <Link
              href="/contact"
              className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex gap-6 text-gray-600">
            <a
              href="https://github.com/harshnmhatre143"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={23} />
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-mhatre-684812283/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={23} />
            </a>

            <a
              href="mailto:harshnmhatre143@gmail.com"
              aria-label="Email"
            >
              <Mail size={23} />
            </a>
          </div>
        </div>

        {/* Right Section - Profile Photo */}
        <div className="flex justify-center">
          <div className="relative 	w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/profile.jpeg"
              alt="Harsh Mhatre"
              fill
              priority
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;