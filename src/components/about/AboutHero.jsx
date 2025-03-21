import React from "react";

// Import data
import INFO from "../../data/user";

const AboutHero = () => {
  return (
    <section className="relative py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {INFO.about.tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 