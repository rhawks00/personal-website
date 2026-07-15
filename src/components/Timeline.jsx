import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    title: "Full-Stack Software Engineer II",
    company: "Capital One / Discover",
    date: "April 2025 - Present",
    bullets: [
      "Integrated AI chatbot into call center software for real-time agent assistance",
      "Built address verification tool with Google Maps API",
    ],
  },
  {
    title: "Full-Stack Software Engineer I",
    company: "Discover Financial Services",
    date: "August 2024 - April 2025",
    bullets: [
      "Led full-stack React app for managing disclosure databases, reducing effort by 90%",
      "Improved Agile ceremonies, reducing sprint velocity variance by over 200%",
    ],
  },
  {
    title: "Back-End Software Engineer I",
    company: "Discover Financial Services",
    date: "August 2023 - August 2024",
    bullets: [
      "Developed Spring REST API endpoints, increasing data retrieval speeds by 50%+",
      "Resolved critical production bugs impacting new customer account creation",
    ],
  },
  {
    title: "Business Technology Intern",
    company: "Discover Financial Services",
    date: "June 2022 - August 2022",
    bullets: [
      "Implemented test suites for Billpay APIs",
    ],
  },
  {
    title: "M.B.A. Candidate",
    company: "University of Illinois Urbana-Champaign",
    date: "August 2026 - est. May 2028",
    bullets: [],
    icon: "education",
  },
  {
    title: 'Purdue "All-American" Marching Band Section Leader',
    company: "Purdue University",
    date: "January 2022 - May 2023",
    bullets: [
      "Trained and selected the final membership of the 2022 and 2023 All-American Marching Band",
    ],
    icon: "education",
  },
];

function Timeline() {
  return (
    <section className="relative z-10 px-6 py-20 ">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Experience
      </h2>

      <VerticalTimeline lineColor="#3B82F6">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1E293B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1E293B" }}
            date={exp.date}
            dateClassName="text-gray-800 dark:text-gray-300"
            iconStyle={{ background: exp.icon === "education" ? "#10B981" : "#3B82F6", color: "#fff" }}
            icon={exp.icon === "education" ? <FaGraduationCap /> : <FaBriefcase />}
            visible={true}
          >
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <h4 className="text-lg font-medium">{exp.company}</h4>
            {exp.bullets.length > 0 && (
              <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-gray-300">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
