// src/components/Footer.js

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">© {new Date().getFullYear()} Naman Ahuja. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
