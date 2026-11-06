import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const projects = {
  "ecom-mern": {
    title: "Ecom-MERN",
    category: "Full Stack Application",
    description: "A full-stack e-commerce platform built using the MERN stack.",
    overview: "Ecom-MERN is an e-commerce application that allows users to browse products, manage their shopping cart, place orders and make online payments. It also includes an admin dashboard for managing products and orders.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "Razorpay", "Cloudinary"],
    features: [
      "User registration and authentication",
      "Product browsing and management",
      "Shopping cart and checkout",
      "Online payment integration",
      "Admin dashboard",
      "Order management"
    ],
    screenshots: [
      { src: "ecom-home.png", title: "Home Page" },
      { src: "ecom-cart.png", title: "Shopping Cart" },
      { src: "ecom-dashboard.png", title: "Admin Dashboard" }
    ],
    github: "https://github.com/harshnmhatre143/Ecom-MERN",
    live: ""
  },

  linkzaar: {
    title: "Linkzaar",
    category: "Full Stack Application",
    description: "A Linktree-style application for sharing multiple links in one place.",
    overview: "Linkzaar allows users to organize their important links on a single personalized page that can be shared using a unique handle.",
    technologies: ["Next.js", "MongoDB"],
    features: [
      "Create a personalized link page",
      "Manage multiple links",
      "Share links using a unique handle"
    ],
    screenshots: [
      { src: "link-home.png", title: "Home Page" },
      { src: "link-create.png", title: "Create Link Page" },
      { src: "link-profile.png", title: "Profile Page" }
    ],
    github: "https://github.com/harshnmhatre143/Linkzaar",
    live: ""
  },

  supportify: {
    title: "Supportify",
    category: "Web Application",
    description: "A crowdfunding platform for supporting favourite creators.",
    overview: "Supportify is a crowdfunding platform designed to help creators receive financial support from their audience.",
    technologies: ["Next.js", "NextAuth", "Razorpay"],
    features: [
      "User authentication",
      "Creator support pages",
      "Payment integration"
    ],
    screenshots: [
      { src: "support-home.png", title: "Home Page" },
      { src: "support-creator.png", title: "Creator Page" },
      { src: "support-dashboard.png", title: "Creator Dashboard" }
    ],
    github: "https://github.com/harshnmhatre143/Supportify",
    live: ""
  },

  chhotaurl: {
    title: "ChhotaURL",
    category: "Backend Application",
    description: "A URL shortener that converts long URLs into shorter links.",
    overview: "ChhotaURL makes long web addresses easier to share by generating short URLs that redirect users to their original destinations.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    features: [
      "Generate short URLs",
      "Redirect to original URLs",
      "Store URL records"
    ],
    screenshots: [
      { src: "url-home.png", title: "Home Page" },
      { src: "url-generate.png", title: "URL Generation" },
      { src: "url-ready.png", title: "Generated URL"
      }
    ],
    github: "https://github.com/harshnmhatre143/ChhotaURL",
    live: ""
  },

  passop: {
    title: "PassOp - Password Manager",
    category: "Full Stack Application",
    description: "An application for storing and managing website credentials.",
    overview: "PassOp is a password manager project that allows users to save and manage website credentials.",
    technologies: ["React", "Vite", "Express.js", "MongoDB"],
    features: [
      "Save website credentials",
      "Manage stored passwords",
      "MongoDB database integration"
    ],
    screenshots: [
      { src: "pass-home.png", title: "Home Page" },
      { src: "pass-save.png", title: "Saved Passwords" }
    ],
    github: "https://github.com/harshnmhatre143/PassOp-Passwordmanager",
    live: ""
  },

  "todo-list": {
    title: "Todo List App",
    category: "Web Application",
    description: "A task management application for organizing daily activities.",
    overview: "A Todo List application built to practice frontend development and task management functionality.",
    technologies: ["React", "JavaScript", "CSS"],
    features: [
      "Add tasks",
      "Manage tasks",
      "Track completed activities"
    ],
    screenshots: [
      { src: "todo-home.png", title: "Todo List Application" }
    ],
    github: "https://github.com/harshnmhatre143/todo-list-app",
    live: ""
  },

  "frontend-clones": {
    title: "Frontend Clone Projects",
    category: "Frontend Development",
    description: "A collection of frontend clones inspired by popular platforms.",
    overview: "This repository contains frontend clone projects inspired by Twitter, Spotify and Netflix, created to practice frontend development and UI recreation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Twitter UI clone",
      "Spotify UI clone",
      "Netflix UI clone",
      "Responsive layouts"
    ],
    screenshots: [
      { src: "twitter-home.png", title: "Twitter Clone" },
      { src: "spotify-home.png", title: "Spotify Clone" },
      { src: "netflix-home.png", title: "Netflix Clone" },
      { src: "netflix-home2.png", title: "Netflix Clone - Additional View" }
    ],
    github: "https://github.com/harshnmhatre143/Frontend-Clone-Projects",
    live: ""
  }
};

const ProjectDetails = async ({ params }) => {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const imageFolder =
    slug === "frontend-clones"
      ? "/projectPics/frontend-clone"
      : `/projectPics/${slug}`;

  return (
    <main className="min-h-screen bg-white px-6 py-16 md:py-20 text-gray-900">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/projects"
          className="mb-10 inline-block text-sm text-blue-600 transition hover:text-blue-800"
        >
          ← Back to Projects
        </Link>

        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
          {project.category}
        </p>

        <h1 className="mb-5 text-4xl font-bold md:text-5xl">
          {project.title}<span className="text-blue-600">.</span>
        </h1>

        <p className="mb-12 max-w-3xl text-lg leading-8 text-gray-600">
          {project.description}
        </p>

        <section className="mb-14">
          <h2 className="mb-4 text-2xl font-semibold">
            Project Overview
          </h2>

          <p className="max-w-4xl leading-8 text-gray-600">
            {project.overview}
          </p>
        </section>

        {/* Project Screenshots */}
        <section className="mb-14">
          <h2 className="mb-3 text-2xl font-semibold">
            Project Screenshots
          </h2>

          <p className="mb-7 text-sm text-gray-500">
            Explore the different pages and features of this project.
            Click any image to view it in full size.
          </p>

          <div className="grid gap-7 sm:grid-cols-2">
            {project.screenshots.map((screenshot) => {
              const imagePath = `${imageFolder}/${screenshot.src}`;

              return (
                <a
                  key={screenshot.src}
                  href={imagePath}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50"
                >
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <Image
                      src={imagePath}
                      alt={`${project.title} - ${screenshot.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4">
                    <h3 className="text-sm font-semibold text-gray-800 transition group-hover:text-blue-600">
                      {screenshot.title}
                    </h3>

                    <span className="text-sm text-gray-500 transition group-hover:text-blue-600">
                      View ↗
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-semibold">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-semibold">
            Key Features
          </h2>

          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-gray-600">
                <span className="text-blue-600">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Project Links */}
        {(project.github || project.live) && (
          <section className="flex flex-wrap gap-4 border-t border-gray-200 pt-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-gray-900 px-6 py-3 text-sm text-white transition hover:bg-blue-600"
              >
                GitHub Repository
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-gray-300 px-6 py-3 text-sm text-gray-800 transition hover:border-blue-500 hover:text-blue-600"
              >
                Live Demo
              </a>
            )}
          </section>
        )}

      </div>
    </main>
  );
};

export default ProjectDetails;