import React from "react";

// Import data
import INFO from "../../data/user";

const ShowReel = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Cinematography Reel</h2>
          <p className="text-gray-600">
            A selection of my best cinematography work showcasing my visual style and technical abilities.
          </p>
        </div>

        <div className="aspect-video max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
          {INFO.showreel?.url ? (
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={INFO.showreel.url}
                title="Demo Reel"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Demo reel coming soon</p>
            </div>
          )}
        </div>

        {INFO.showreel?.description && (
          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-gray-600">
              {INFO.showreel.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowReel; 