// src/components/Skills.js

const Skills = () => {
  return (
    <section className="py-16 bg-gray-100" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li className="mb-2"><strong>JavaScript</strong>: Modern JavaScript, asynchronous programming, advanced concepts.</li>
                <li className="mb-2"><strong>React</strong>: Dynamic UIs, state management, performance optimization.</li>
                <li className="mb-2"><strong>Next.js</strong>: Server-side rendering, static site generation.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li className="mb-2"><strong>Node.js</strong>: Server-side development, scalable APIs.</li>
                <li className="mb-2"><strong>Express.js</strong>: Middleware, routing, RESTful services.</li>
                <li className="mb-2"><strong>MongoDB</strong>: NoSQL database management, schema design.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">DevOps & Cloud</h3>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li className="mb-2"><strong>AWS</strong>: Cloud computing services, deployment, and management.</li>
                <li className="mb-2"><strong>Docker</strong>: Containerizing applications, consistent development, and deployment.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li className="mb-2"><strong>Java</strong>: Object-oriented programming, algorithm design.</li>
                <li className="mb-2"><strong>C++</strong>: Object-oriented programming, algorithm design.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Problem Solving</h3>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li className="mb-2">Efficient and optimized solutions.</li>
                <li className="mb-2">5-star rating in Problem Solving on HackerRank.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
