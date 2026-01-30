import { FaGithub, FaLinkedin, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative z-10 w-full">
      <footer className="w-full bg-gray-800 text-white pt-8 pb-10 flex flex-col items-center justify-center z-10">
        <div className="w-full max-w-screen-xl mx-auto px-6 flex flex-col items-center">
          <div className="flex gap-6 mb-4 z-10">
            <a href="https://github.com/rhawks00" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/ryanhawks34/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-white hover:text-gray-400 transition-colors" />
            </a>
            <a href="mailto:rhawks1234@gmail.com">
              <FaEnvelope size={30} className="text-white hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
              <FaQuestionCircle size={30} className="hover:text-gray-400" />
            </a>
          </div>
          <p className="text-sm">© {currentYear} Ryan Hawks</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
