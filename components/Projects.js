const Projects = () => {
  return (
    <section className="py-16 bg-gray-100" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <a href="https://github.com/Namanahuja82/ChatNow" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/chat-app.png"
                  alt="Real-time Chat Application"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Real-time Chat Application</h3>
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <a href="https://github.com/Namanahuja82/LibraryManagement" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/lib.png"
                  alt="Library Management System"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Library Management System</h3>
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <a href="https://github.com/yourusername/chitragupta-ai" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/chitragupta.png"
                  alt="Chitragupta AI"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Chitragupta AI</h3>
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <a href="https://github.com/Namanahuja82/portfolio-next" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/portf.png"
                  alt="Portfolio Website"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
