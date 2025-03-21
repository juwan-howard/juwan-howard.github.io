import React from "react";

// Import data
import INFO from "../../data/user";

const Equipment = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Equipment</h2>

          {/* Equipment Categories */}
          <div className="space-y-10">
            {INFO.equipment && INFO.equipment.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
                  {category.category}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="py-2 flex items-start">
                      <span className="text-gray-800 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Note about other equipment */}
          <div className="mt-10 p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-gray-600">
              Additional equipment can be rented as needed for specific projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment; 