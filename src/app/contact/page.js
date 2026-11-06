import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-20 md:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Get In Touch
          </p>

          <h1 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Contact <span className="text-blue-600">Me.</span>
          </h1>

          <p className="mx-auto max-w-2xl leading-7 text-gray-600">
            Have a project idea, collaboration opportunity, or just want to
            connect? Feel free to reach out. I'd be happy to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* Contact Information */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Let's Connect
            </h2>

            <p className="mb-8 max-w-md leading-7 text-gray-600">
              I'm always interested in learning new technologies,
              working on projects, and connecting with people in the
              development community.
            </p>

            <div className="space-y-6">

              <a
                href="mailto:harshnmhatre143@gmail.com"
                className="flex items-center gap-4 text-gray-700 transition hover:text-blue-600"
              >
                <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">harshnmhatre143@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/harshnmhatre143"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-700 transition hover:text-blue-600"
              >
                <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                  <FaGithub size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="font-medium">github.com/harshnmhatre143</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/harsh-mhatre-684812283/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-700 transition hover:text-blue-600"
              >
                <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                 <FaLinkedinIn size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="font-medium">Connect with me</p>
                </div>
              </a>

            </div>
          </div>

          {/* Contact Message */}
          <div className="rounded-xl border border-gray-200 p-8">
            <h2 className="mb-5 text-2xl font-semibold text-gray-900">
              Let's Work Together
            </h2>

            <p className="mb-8 leading-7 text-gray-600">
              Whether you have a project in mind, an opportunity,
              or a question, feel free to contact me through email
              or connect with me on GitHub and LinkedIn.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Get In Touch
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}