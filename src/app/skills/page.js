"use client";

const Skills = () => {
  return (
    <main className="min-h-screen bg-white px-6 py-16 md:py-20 text-gray-900">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            What I Know
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            My <span className="text-blue-600">Skills.</span>
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-gray-600">
            Technologies and tools I use to build responsive websites
            and full-stack web applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-xl border border-gray-200 p-7 transition duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50">
            <h2 className="mb-5 text-xl font-semibold">
              Programming Languages
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="skill">JavaScript</span>
              <span className="skill">Python</span>
              <span className="skill">HTML</span>
              <span className="skill">CSS</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-7 transition duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50">
            <h2 className="mb-5 text-xl font-semibold">
              Frontend Development
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="skill">React.js</span>
              <span className="skill">Next.js</span>
              <span className="skill">Tailwind CSS</span>
              <span className="skill">Responsive Design</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-7 transition duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50">
            <h2 className="mb-5 text-xl font-semibold">
              Backend Development
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="skill">Node.js</span>
              <span className="skill">Express.js</span>
              <span className="skill">REST APIs</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-7 transition duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50">
            <h2 className="mb-5 text-xl font-semibold">
              Databases
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="skill">MongoDB</span>
              <span className="skill">Mongoose</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-7 transition duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50">
            <h2 className="mb-5 text-xl font-semibold">
              Developer Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="skill">Git</span>
              <span className="skill">GitHub</span>
              <span className="skill">VS Code</span>
              <span className="skill">Postman</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-7 transition duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50">
            <h2 className="mb-5 text-xl font-semibold">
              Other Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="skill">Computer Hardware</span>
              <span className="skill">Networking</span>
              <span className="skill">Troubleshooting</span>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .skill {
          border: 1px solid #dbeafe;
          border-radius: 6px;
          padding: 8px 13px;
          font-size: 14px;
          color: #1d4ed8;
          background: #eff6ff;
        }
      `}</style>
    </main>
  );
};

export default Skills;