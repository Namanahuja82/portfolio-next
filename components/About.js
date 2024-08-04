// src/components/About.js

const About = () => {
  return (
    <section className="py-7 bg-gray-100 mt-20" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">Hi, I am Naman</h2>

          {/* Button for Mobile */}
          <a
            href="/2110990908_naman.pdf"  // Link to your resume file
            download
            className="block px-4 py-2.5 bg-blue-500 text-white font-semibold text-base rounded shadow-lg hover:bg-blue-600 transition duration-300 mb-6 md:hidden max-w-xs mx-auto"
          >
            Download Resume
          </a>

          <p className="text-lg text-gray-700 mx-auto max-w-full md:max-w-3xl leading-relaxed mb-6">
          As a Full Stack Developer, I know JavaScript, React, Node.js, Express, MongoDB, Next.js, AWS, and Docker. I'm good at connecting third-party APIs and building web apps that can grow. I solve problems well and understand data structures from lots of practice and learning. I have certificates in Java, C++, AWS, and Python, which shows I know my stuff in data structures, web development, and cloud computing. I've built two cool things: a library system using MERN stack and a chat app that works in real-time with Express.js and Socket.IO. I always try to make things that users will like, and I work well with others. Let's team up and make something awesome! 
          </p>

          {/* Button for Desktop */}
          <a
            href="/2110990908_naman.pdf"  // Link to your resume file
            download
            className="hidden md:block px-4 py-2.5 bg-blue-500 text-white font-semibold text-base rounded shadow-lg hover:bg-blue-600 transition duration-300 max-w-xs mx-auto"
          >
           Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
