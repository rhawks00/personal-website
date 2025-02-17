import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import { motion } from 'framer-motion';
const experiences = [
  {
    title: "Full-Stack Associate Application Engineer",
    company: "Discover Financial Services",
    date: "Aug 2024 - Present",
    description:
      "Led development of internal CRUD application, improved Agile ceremonies, and enhanced Discover's Disclosure Playback API.",
  },
  {
    title: "Back-End Associate Application Engineer",
    company: "Discover Financial Services", 
    date: "Aug 2023 - Aug 2024",
    description:
      "Developed API endpoints to optimize data retrieval and modernized call center software by implementing these endpoints, resulting in improved operational efficiency.",
  },
  {
    title: "Business Technology Intern",
    company: "Discover Financial Services",
    date: "June 2022 - Aug 2022", 
    description:
      "Implemented test suites for Billpay APIs and presented learnings on Spring Boot and Postman.",
  },
  {
    title: "Purdue 'All-American' Marching Band Section Leader",
    company: "Purdue University",
    date: "January 2022 - May 2023",
    description:
      "Trained and selected the final membership of the 2022 and 2023 All-American Marching Band.",
  },
];

function Timeline() { 
  return (
    <section className="relative z-10 px-6 py-20 "> 
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Work Experience
      </h2>

      <VerticalTimeline lineColor="#3B82F6"> {/* Added lineColor prop */}
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1E293B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1E293B" }}
            date={exp.date}
            dateClassName="text-gray-800 dark:text-gray-300" // Added date styling
            iconStyle={{ background: "#3B82F6", color: "#fff" }}
            icon={<FaBriefcase />}
            visible={true} // Force visibility
          >
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <h4 className="text-lg font-medium">{exp.company}</h4>
            <p className="text-md mt-2">{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
