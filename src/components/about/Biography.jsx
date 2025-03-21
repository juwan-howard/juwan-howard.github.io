import React from "react";

// Import data
import INFO from "../../data/user";

const Biography = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <img
                src={INFO.about.profileImage}
                alt={INFO.main.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Biography Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Biography</h2>
            <div className="prose prose-lg max-w-none">
              {INFO.about.biography.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Education */}
            {INFO.about.education && INFO.about.education.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <ul className="space-y-4">
                  {INFO.about.education.map((item, index) => (
                    <li key={index}>
                      <h4 className="font-medium">{item.degree}</h4>
                      <p className="text-gray-600">{item.institution}, {item.year}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography; 