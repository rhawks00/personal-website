import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from 'framer-motion'; // Importing framer-motion for hover effect

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const projects: ProjectProps[] = [
  {
    title: "VirtuCards",
    description: "Built during COVID-19, this was a virtual card game designed to be played on your mobile phone with a desktop game to act as a common screen between players. This was built using Unity, Photon, and Google Firebase.",
    image: "/images/VirtuCards.jpg",
    link: "https://github.com/VirtuCard/Virtucard",
  },
  {
    title: "GQL",
    description: "SQL database server with version control, backend written using Rust and frontend written using React. Implemented SQL operations, B-trees for indexing, and version control commands.",
    image: "/images/GQL.jpg",
    link: "https://github.com/GQL-Project/gql_db",
  },
  {
    title: "Wordle for Terminal",
    description: "A Wordle clone built so it can be played in your terminal. Created as an exercise to learn Python.",
    image: "/images/Wordle.jpg",
    link: "https://github.com/rhawks00/WordleforTerminal",
  },
  {
    title: "Personal Website!",
    description: "Built to be a 'flashier' introduction to myself and to showcase some of my web development skills. This was built using React, Tailwind CSS, TSParticles, React-Multi-Carousel, React-Bootstrap, and more fun libraries.",
    image: "/images/website.jpg",
    link: "https://github.com/rhawks00/personal-website",
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 2000 }, items: 3 },
  desktop: { breakpoint: { max: 2000, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Projects: React.FC = () => {
  return (
    <section className="relative z-10 px-6 pb-24">
      <div className="text-white">
        <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">My Projects</h2>
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
          {projects.map((project, index) => (
            <div key={index} className="h-[600px] flex flex-col p-6 bg-gray-800 rounded-lg shadow-lg m-4">
              <div className="flex-1 p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 text-lg line-clamp-4">{project.description}</p>
              </div>
              <div className="p-6 flex justify-center">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto max-h-64 object-contain rounded-lg" 
                  whileHover={{ scale: 1.8 }} // Scale up on hover to match project tile size
                  transition={{ type: "spring", stiffness: 100 }} // Smooth transition
                />
              </div>
              {project.link && (
                <div className="flex justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-blue-400 hover:underline text-lg"
                  >
                    View Project →
                  </a>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
