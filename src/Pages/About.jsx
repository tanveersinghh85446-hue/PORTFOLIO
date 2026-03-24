import React from "react";

const About = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="Bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-none"></div>

      {/* Content */}
      <div className="relative max-w-6xl w-full bg-none backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Me
          </h1>
          <p className="text-gray-500 mt-2">
            Web Developer | React | Tailwind
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Who I Am
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate web developer who loves building modern,
              responsive, and user-friendly websites. I enjoy turning ideas
              into real-world applications using React and Tailwind CSS.
              I'm currently improving my full-stack development skills and
              building portfolio projects.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              My Skills
            </h2>

            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 px-3 py-1 rounded-lg">HTML</span>
              <span className="bg-gray-200 px-3 py-1 rounded-lg">CSS</span>
              <span className="bg-gray-200 px-3 py-1 rounded-lg">JavaScript</span>
              <span className="bg-gray-200 px-3 py-1 rounded-lg">React</span>
              <span className="bg-gray-200 px-3 py-1 rounded-lg">Tailwind</span>
              <span className="bg-gray-200 px-3 py-1 rounded-lg">Node.js</span>
              <span className="bg-gray-200 px-3 py-1 rounded-lg">Git</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">My Goal</h3>
            <p className="text-gray-600">
              My goal is to become a full-stack developer and build scalable
              web applications that solve real-world problems.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Currently Learning</h3>
            <p className="text-gray-600">
              Currently learning backend development, APIs, databases,
              and improving React skills.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;