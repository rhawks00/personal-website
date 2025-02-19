import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden min-h-screen pb-6">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-12 pt-10">
        <div className="flex-grow text-center md:text-left">
          <div className="flex items-baseline justify-center md:justify-start">
            <span className="text-8xl font-bold text-gray-800 dark:text-white animate-fade-in opacity-0">
              Hello!
            </span>
          </div>
          <div className="text-5xl font-semibold text-blue-600 dark:text-blue-400 text-left w-full h-20 hidden md:block">
            <Typewriter
              words={['Lorem ipsum do', 'My name is Ryan, and I like to code.']}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              startDelay={3000}
              loop={1}
            />
          </div>
        </div>
      </div>
      <motion.div 
        className="flex flex-col items-center justify-center flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
      >
        <img
          src="/images/IMG_6857.jpg"
          className="w-[40vh] h-[40vh] md:w-[40vh] md:h-[40vh] xl:w-[50vh] xl:h-[50vh] rounded-full shadow-lg object-cover"
        />
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mt-4">Ryan Hawks</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Software Engineer | Chicago, IL</p>
        <a
          href="/documents/Hawks_Resume_2_18_25.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 mb-2"
        >
          View Resume
        </a>
      </motion.div>
    </section>
  );
}

export default HeroSection;