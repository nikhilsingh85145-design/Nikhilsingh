const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'blue',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 92 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Next.js', level: 80 },
      ],
    },
    {
      title: 'Backend',
      color: 'purple',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'Python', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'REST APIs', level: 88 },
      ],
    },
    {
      title: 'Tools & Others',
      color: 'pink',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: 'Linux', level: 75 },
        { name: 'Figma', level: 72 },
        { name: 'AWS', level: 65 },
      ],
    },
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Python', icon: '🐍' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📦' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'GraphQL', icon: '◈' },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return { bar: 'bg-blue-500', bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' };
      case 'purple':
        return { bar: 'bg-purple-500', bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' };
      case 'pink':
        return { bar: 'bg-pink-500', bg: 'bg-pink-500/20', text: 'text-pink-400', border: 'border-pink-500/30' };
      default:
        return { bar: 'bg-blue-500', bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' };
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Skills</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Technology Icons */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className={`p-6 bg-gray-800 rounded-xl border ${colors.border} hover:border-opacity-60 transition-all duration-300`}
              >
                <h3 className={`text-xl font-bold ${colors.text} mb-6`}>{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-gray-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${colors.bar} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-gray-800 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Always <span className="text-blue-400">Learning</span>
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto">
            I believe in continuous learning and staying up-to-date with the latest technologies. 
            Currently exploring AI/ML integration in web applications, cloud architecture, and advanced system design patterns. 
            I'm always excited to learn new tools and frameworks that can help me build better products.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['AI/ML', 'Cloud Computing', 'System Design', 'DevOps', 'Microservices', 'Web3'].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-gray-700 rounded-full text-gray-300 text-sm border border-gray-600"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
