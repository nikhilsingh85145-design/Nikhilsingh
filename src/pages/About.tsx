const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what drives me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image / Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      NSR
                    </div>
                    <p className="text-gray-400 mt-2 text-sm">Nikhil Singh Rajput</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              A passionate developer based in India 🇮🇳
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Hello! I'm <span className="text-blue-400 font-semibold">Nikhil Singh Rajput</span>, 
                a Full Stack Developer with a passion for creating beautiful, functional, and user-centered digital experiences.
              </p>
              <p>
                With 2+ years of experience in web development, I specialize in building modern web applications 
                using technologies like React, Node.js, TypeScript, and more. I love turning complex problems 
                into simple, elegant solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Info Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Name</div>
                  <div className="text-white text-sm font-medium">Nikhil Singh Rajput</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Email</div>
                  <div className="text-white text-sm font-medium">nikhil@example.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Location</div>
                  <div className="text-white text-sm font-medium">India</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Status</div>
                  <div className="text-white text-sm font-medium">Open to Work</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            My <span className="text-blue-400">Journey</span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700 hidden md:block"></div>
            
            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <span className="text-blue-400 text-sm font-medium">2022 - Present</span>
                    <h3 className="text-white text-lg font-semibold mt-1">Full Stack Developer</h3>
                    <p className="text-gray-400 text-sm mt-2">Building scalable web applications and contributing to various projects using modern technologies.</p>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>
                <div className="md:w-1/2"></div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2"></div>
                <div className="hidden md:flex w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 z-10"></div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <span className="text-purple-400 text-sm font-medium">2021 - 2022</span>
                    <h3 className="text-white text-lg font-semibold mt-1">Frontend Developer</h3>
                    <p className="text-gray-400 text-sm mt-2">Focused on creating responsive and interactive user interfaces with React and modern CSS.</p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <span className="text-pink-400 text-sm font-medium">2020 - 2021</span>
                    <h3 className="text-white text-lg font-semibold mt-1">Started Coding Journey</h3>
                    <p className="text-gray-400 text-sm mt-2">Began learning programming fundamentals, web development basics, and explored various technologies.</p>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 bg-pink-500 rounded-full border-4 border-gray-900 z-10"></div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
