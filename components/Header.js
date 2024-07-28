"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profileImg from "../public/images/pic.jpg"; // Ensure the path is correct

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Image
            src={profileImg}
            alt="Naman Ahuja"
            className="rounded-full"
            width={40}
            height={40}
          />
          <Link href="#" className="text-xl font-bold text-gray-900 ml-3" id="nav-brand">
            <i className="ri-flashlight-fill"></i> Naman Ahuja
          </Link>
        </div>
        <div className={`md:flex ${menuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full bg-white shadow-lg md:shadow-none md:bg-transparent md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
            <li className="nav__item" onClick={() => setMenuOpen(false)}>
              <Link href="#home" className="block p-2 text-gray-900 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li className="nav__item" onClick={() => setMenuOpen(false)}>
              <Link href="#about" className="block p-2 text-gray-900 hover:text-blue-500">
                About
              </Link>
            </li>
            <li className="nav__item" onClick={() => setMenuOpen(false)}>
              <Link href="#skills" className="block p-2 text-gray-900 hover:text-blue-500">
                Skills
              </Link>
            </li>
            <li className="nav__item" onClick={() => setMenuOpen(false)}>
              <Link href="#projects" className="block p-2 text-gray-900 hover:text-blue-500">
                Projects
              </Link>
            </li>
            <li className="nav__item" onClick={() => setMenuOpen(false)}>
              <Link href="#contact" className="block p-2 text-gray-900 hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-900">
            <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
