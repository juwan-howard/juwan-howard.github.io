import React from "react";
import { Link } from "react-router-dom";

// Import data
import INFO from "../../data/user";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"
          style={{
            backgroundImage: `url(${INFO.main.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {INFO.main.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {INFO.main.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/about"
              className="px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors text-center"
            >
              About Me
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors text-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 