import React from "react";

const About = () => {
    return (
        <main className="max-w-6xl mx-auto px-6 md:px-20 py-12">

            <div className="mb-12">
                <p className="text-blue-600 font-medium text-lg mb-3">
                    Get to know me
                </p>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    About Me
                </h1>

                <p className="text-gray-600 text-lg leading-8 max-w-3xl">
                    I'm Harsh Mhatre, a Full Stack Web Developer passionate about
                    building modern and user-friendly web applications. I enjoy
                    learning new technologies, solving problems and turning ideas
                    into practical digital experiences.
                </p>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    My Journey
                </h2>

                <p className="text-gray-600 leading-8 max-w-4xl">
                    My interest in technology led me to pursue Computer Engineering.
                    During my academic journey, I developed a strong interest in web
                    development and explored both frontend and backend technologies.
                    I have worked on projects using React, Next.js, Node.js, Express
                    and MongoDB, which helped me understand how to build complete
                    web applications. I enjoy learning new technologies and improving
                    my development skills through practical projects.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Education
                </h2>

                <div className="border-l-2 border-blue-600 pl-6 space-y-8">

                    <div>
                        <p className="text-sm text-blue-600 font-medium">
                            Currently Pursuing
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-2">
                            Computer Engineering
                        </h3>

                        <p className="text-gray-700 mt-1">
                            Chhatrapati Shivaji Maharaj Institute of Technology
                        </p>

                        <p className="text-gray-500 text-sm mt-2">
                            Final Year · Shedung, Panvel, Maharashtra
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-blue-600 font-medium">
                            Completed
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-2">
                            Diploma in Computer Engineering
                        </h3>

                        <p className="text-gray-700 mt-1">
                            Pillai HOC College of Engineering and Technology
                            (Diploma Section)
                        </p>

                        <p className="text-gray-500 text-sm mt-2">
                            Rasayani, Khalapur, Raigad, Maharashtra
                        </p>
                    </div>

                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Internship Experience
                </h2>

                <div className="border-l-2 border-blue-600 pl-6">
                    <p className="text-sm text-blue-600 font-medium">Completed</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-2">
                        Computer Hardware and Networking
                    </h3>

                    <p className="text-gray-700 mt-1">
                        Quasco Consultancy India Pvt. Ltd.
                    </p>

                    <p className="text-gray-600 leading-7 mt-3">
                        Completed industrial training focused on computer hardware,
                        networking, and troubleshooting. Gained practical experience
                        in identifying hardware issues, diagnosing problems, and
                        understanding basic network setup and maintenance.
                    </p>
                </div>
            </div>

        </main>
    );
};

export default About;