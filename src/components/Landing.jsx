import React from 'react';

const Landing = () => {
  const navigationItems = ['Services', 'Process', 'Industries', 'Pricing', 'Team', 'Contact', 'FAQ'];
  
  const logos = [
    { id: 1, alt: 'Logo 1', className: 'opacity-50 h-8' },
    { id: 2, alt: 'Logo 2', className: 'opacity-50 h-8' },
    { id: 3, alt: 'Logo 3', className: 'opacity-50 h-8' },
    { id: 4, alt: 'Logo 4', className: 'opacity-50 h-8' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-orange-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 w-full fixed bg-white/30 backdrop-blur-lg shadow-md">

        <div className="flex items-center space-x-2">
          <div className="text-white text-2xl font-semibold">✧ Auralis</div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
          Get template
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-7xl md:text-7xl from-neutral-400 text-white mb-8 my-20 leading-tight">
          We elevate your business
          <br />
          using Artificial Intelligence.
        </h1>
        
        <p className="text-gray-300 text-xl mb-12 max-w-3xl  mx-auto">
          We elevate and grow organizations using top-tier Artificial Intelligence solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Our services
          </button>
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center">
            Book a call
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Logo Section */}
        <div className="mt-20">
          <p className="text-gray-400 mb-8">You're in good company</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {logos.map((logo) => (
              <img
                key={logo.id}
                src="/api/placeholder/160/40"
                alt={logo.alt}
                className={logo.className}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Framer Badge */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2">
          <span>Made in Framer</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;