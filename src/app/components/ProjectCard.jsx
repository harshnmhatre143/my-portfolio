import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50"
    >
      <p className="mb-4 text-sm font-medium text-blue-600">
        {project.category}
      </p>

      <h2 className="mb-3 text-xl font-semibold text-gray-900 transition group-hover:text-blue-600">
        {project.title}
      </h2>

      <p className="mb-6 text-sm leading-6 text-gray-600">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-6 text-sm font-medium text-gray-900 transition group-hover:text-blue-600">
        View Project →
      </p>
    </Link>
  );
};

export default ProjectCard;