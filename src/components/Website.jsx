import React from 'react';
import { Mic } from 'lucide-react';

const Website = () => {
 

  const ServicesSection = () => (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">Our Services</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Chatbot Development Card */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Chatbot Development</h3>
            <p className="text-gray-400">
              We develop advanced AI-driven chatbots that handle repetitive tasks, 
              manage data, and streamline your internal workflows to drive real 
              results for your business.
            </p>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-800" />
                <span>You:</span>
              </div>
              <p className="mb-4">Please create a graph of the profits in this file</p>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 rounded-full bg-orange-500" />
                <span className="text-orange-500">AI Assistant</span>
              </div>
              <div className="h-40 bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-full w-1/4 bg-gradient-to-t from-orange-600 to-orange-400" />
              </div>
            </div>
          </div>

          {/* Voice Assistants Card */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Voice Assistants</h3>
            <p className="text-gray-400">
              We develop voice assistants that use advanced natural language 
              processing (NLP) to handle inbound and outbound calls for support, 
              scheduling, reminders, and promotions.
            </p>
            
            <div className="bg-gray-900 p-6 rounded-lg flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-orange-900/50 flex items-center justify-center">
                  <Mic className="w-8 h-8 text-orange-500" />
                </div>
                <div className="absolute inset-0 flex items-center">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-12 bg-orange-500/20 mx-1 rounded-full"
                      style={{
                        height: `${Math.random() * 48 + 12}px`,
                        opacity: Math.random() * 0.5 + 0.2
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-3xl  mx-auto">
        <span className="text-orange-500 text-2xl  text-center">About us</span>
        
        <div className="mt-8 space-y-6">
          <h2 className="text-2xl md:text-5xl  leading-tight">
            Hi, we're Auralis ✧ We craft cutting edge 
            AI solutions to make organizations more 
            effective and competitive. We do so with a 
            motivated team
            <span className="inline-flex items-center mx-2">
              <div className="w-8 h-8 rounded-full bg-gray-700 -mr-2" />
              <div className="w-8 h-8 rounded-full bg-gray-600 -mr-2" />
              <div className="w-8 h-8 rounded-full bg-gray-500" />
            </span>
            of 9 experts focused on building world-class solutions.
          </h2>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-black">

      {/* Main Content */}
      <main>
        <AboutSection />
        <ServicesSection />
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

export default Website;