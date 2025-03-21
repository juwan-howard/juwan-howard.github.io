import React from "react";

// Import data
import INFO from "../../data/user";

const Skills = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INFO.skills && INFO.skills.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Software Proficiency */}
          {INFO.software && INFO.software.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Software Proficiency</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {INFO.software.map((item, index) => (
                  <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills; 