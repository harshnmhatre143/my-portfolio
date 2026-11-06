import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    slug: "ecom-mern",
    title: "Ecom-MERN",
    category: "Full Stack Application",
    description: "A full-stack e-commerce platform with authentication, product management, shopping cart and online payments.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Razorpay"],
  },
  {
    slug: "linkzaar",
    title: "Linkzaar",
    category: "Full Stack Application",
    description: "A Linktree-style application that allows users to manage and share all their links in one place.",
    technologies: ["Next.js", "MongoDB"],
  },
  {
    slug: "supportify",
    title: "Supportify",
    category: "Web Application",
    description: "A crowdfunding platform where users can support their favourite creators.",
    technologies: ["Next.js", "NextAuth", "Razorpay"],
  },
  {
    slug: "chhotaurl",
    title: "ChhotaURL",
    category: "Backend Application",
    description: "A URL shortener application that converts long URLs into short, shareable links.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    slug: "passop",
    title: "PassOp - Password Manager",
    category: "Full Stack Application",
    description: "A password manager application for storing and managing website credentials.",
    technologies: ["React", "Vite", "Express.js", "MongoDB"],
  },
  {
    slug: "todo-list",
    title: "Todo List App",
    category: "Web Application",
    description: "A task management application for organizing daily activities.",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    slug: "frontend-clones",
    title: "Frontend Clone Projects",
    category: "Frontend Development",
    description: "A collection of frontend clones inspired by Twitter, Spotify and Netflix.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-white px-6 py-16 md:py-20 text-gray-900">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            My Work
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            My <span className="text-blue-600">Projects.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-600 leading-7">
            Explore the projects I've built while learning and
            developing my skills in web development.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </div>
    </main>
  );
};

export default Projects;