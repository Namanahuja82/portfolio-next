// src/components/Hero.js

import Image from 'next/image';
import heroImg from '../public/images/hero.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900">
          I'm Naman Ahuja
        </h1>
        <p className="text-lg md:text-2xl mb-10 text-gray-800">
          Full Stack Developer
        </p>
        <div className="relative w-full max-w-2xl mx-auto">
          <Image
            src={heroImg}
            alt="Hero Image"
            className="rounded-xl shadow-2xl"
            layout="responsive"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
