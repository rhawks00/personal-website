import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from 'framer-motion';

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
};

const projects: ProjectProps[] = [
  {
    title: "VirtuCards",
    description: "Developed during COVID-19, this virtual card game lets players use their mobile phones while a shared desktop game acts as a common screen.",
    image: "/images/VirtuCards.jpg",
    link: "https://github.com/VirtuCard/Virtucard",
    tags: ["Unity", "C#", "Photon", "Firebase"],
  },
  {
    title: "GQL",
    description: "SQL database server with version control. Implemented SQL operations, B-trees for indexing, and version control commands.",
    image: "/images/GQL.jpg",
    link: "https://github.com/GQL-Project/gql_db",
    tags: ["Rust", "React", "SQL"],
  },
  {
    title: "ParkStats",
    description: "Track your MLB ballpark visits with detailed game logs, spray charts, pitching stats, and leaderboards.",
    image: "/images/ParkStats.jpg",
    link: "https://myparkstats.com/",
    tags: ["React", "TypeScript", "Supabase", "MLB API"],
  },
  /*
  {
    title: "Personal Website!",
    description: "A polished, interactive introduction to my work and skills.",
    image: "/images/website.jpg",
    link: "https://github.com/rhawks00/personal-website",
    tags: ["React", "Tailwind CSS", "TypeScript", "TSParticles"],
  },
  */
  {
    title: "The Holis7ics",
    description: "Band website for The Holis7ics featuring show listings, music, and social links.",
    image: "/images/Holis7icsThumbnail.jpg",
    link: "https://theholis7ics.com/",
    tags: ["React", "TypeScript", "Google Calendar API", "Google OAuth"],
  },
];

const responsive = {
  ultrawide: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  superLargeDesktop: { breakpoint: { max: 3000, min: 2000 }, items: 4 },
  desktop: { breakpoint: { max: 2000, min: 1200 }, items: 3 },
  smallDesktop: { breakpoint: { max: 1200, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CarouselArrow = ({ direction, onClick, carouselState }: any) => {
  if (carouselState && projects.length <= carouselState.slidesToShow) {
    return null;
  }
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      className={`react-multiple-carousel__arrow ${isLeft ? "react-multiple-carousel__arrow--left" : "react-multiple-carousel__arrow--right"}`}
    />
  );
};

const Projects: React.FC = () => {
  return (
    <section className="relative z-10 px-6 pb-24">
      <div className="text-white">
        <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">My Projects</h2>
        <Carousel
          responsive={responsive}
          infinite
          customLeftArrow={<CarouselArrow direction="left" />}
          customRightArrow={<CarouselArrow direction="right" />}
        >
          {projects.map((project, index) => (
            <div key={index} className="h-[450px] flex flex-col p-4 bg-gray-800 rounded-lg shadow-lg m-4 max-w-full">
              <div className="flex-1 p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-medium bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-sm line-clamp-4">{project.description}</p>
              </div>
              <div className="p-4 flex justify-center overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-48 object-contain rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>
              {project.link && (
                <div className="flex justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-blue-400 hover:underline text-base"
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
