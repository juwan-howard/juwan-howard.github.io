import React from "react";
import { Link } from "react-router-dom";

// Import data
import INFO from "../../data/user";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="aspect-square max-w-md mx-auto md:ml-0 rounded-lg overflow-hidden">
              <img 
                src={INFO.about.profileImage} 
                alt={INFO.main.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {INFO.about.description}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {INFO.about.shortBio}
            </p>
            <Link
              to="/about"
              className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 