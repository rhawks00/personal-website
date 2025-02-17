import React, { useState, useEffect } from 'react';

function HeroSection() {
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTyping(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col overflow-hidden pt-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-12 mb-8">
        <div className="flex-grow text-center md:text-left">
          <div className="flex items-baseline justify-center md:justify-start">
            <span className="text-8xl font-bold text-gray-800 dark:text-white animate-fade-in opacity-0">
              Hello!
            </span>
          </div>
          <div className="text-5xl font-semibold text-blue-600 dark:text-blue-400 text-left w-full h-20 hidden md:block">
            {showTyping && (
              <span className="leading-14 animate-typing inline-block origin-left" style={{ width: 'fit-content' }}>
                My name is Ryan, and I like to code.
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="ml-auto mr-auto">
        <img
          src="/images/IMG_6857.jpg"
          className="w-96 h-96 md:w-112 md:h-112 lg:w-128 lg:h-128 rounded-full shadow-lg object-cover"
        />
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mt-6">Ryan Hawks</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Software Engineer | Chicago, IL</p>
        <a
          href="/documents/Hawks_Resume_2_13_25.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 margin: 10px;"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}

export default HeroSection;