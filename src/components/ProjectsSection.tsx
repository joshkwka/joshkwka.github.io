import React, { useState } from "react";
import Project from "@/components/Project";
import Tabs from "@/components/Tabs";

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Software" | "Mechanical">("Software");

  // Images should be 925x500
  const softwareProjects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS.",
      link: "https://joshkwak.com",
      image: "/images/projects/portfolio.png",
      skills: ["Next.js", "Tailwind CSS", "React"],
      textColor: "dark",
    },
    {
      title: "Example",
      description: "...",
      link: "/images/projects/3DPrinter.png",
      skills: ["React", "Firebase", "JavaScript"],
      textColor: "dark",
    },
    {
      title: "Example",
      description: "...",
      link: "/images/projects/3DPrinter.png",
      skills: ["React", "Firebase", "JavaScript"],
      textColor: "dark",
    },
    {
      title: "Industry 4.0 Research",
      description: "Desc",
      link: "https://joshkwak.com",
      image: "/images/projects/portfolio.png",
      skills: ["Next.js", "Tailwind CSS", "React"],
      textColor: "dark",
    },
    {
      title: "Industry 4.0 Research",
      description: "Desc",
      link: "https://joshkwak.com",
      image: "/images/projects/portfolio.png",
      skills: ["Next.js", "Tailwind CSS", "React"],
      textColor: "dark",
    },
    {
      title: "Industry 4.0 Research",
      description: "Desc",
      link: "https://joshkwak.com",
      image: "/images/projects/portfolio.png",
      skills: ["Next.js", "Tailwind CSS", "React"],
      textColor: "dark",
    },
  ];

  const mechanicalProjects = [
    {
      title: "3D Printer",
      description: "3D Printer desc.",
      link: "https://google.com",
      image: "/images/projects/3DPrinter.png",
      skills: ["SolidWorks", "3D Modeling"],
      textColor: "dark",
    },
    {
      title: "Maze-Solving Rover",
      description: "desc.",
      link: "https://google.com",
      image: "/images/projects/3DPrinter.png",
      skills: ["Automation", "Control Systems", "Robotics"],
      textColor: "light",
    },
    {
      title: "Kayak Carrier",
      description: "Designed...",
      link: "https://google.com",
      image: "/images/projects/portfolio.png",
      skills: ["Automation", "Control Systems", "Robotics"],
      textColor: "dark",
    },
    {
      title: "ECU Module Opening Station",
      description: "Designed...",
      link: "https://google.com",
      image: "/images/projects/portfolio.png",
      skills: ["Automation", "Control Systems", "Robotics"],
      textColor: "dark",
    },
    {
      title: "Remote Water Gun",
      description: "Designed...",
      link: "https://google.com",
      image: "/images/projects/portfolio.png",
      skills: ["Automation", "Control Systems", "Robotics"],
      textColor: "dark",
    },
    {
      title: "ANSYS Dogbone Analysis",
      description: "Designed...",
      link: "https://google.com",
      image: "/images/projects/portfolio.png",
      skills: ["Automation", "Control Systems", "Robotics"],
      textColor: "dark",
    },
  ];

  const currentProjects =
    activeTab === "Software" ? softwareProjects : mechanicalProjects;

  return (
    <section id="projects" className="mt-24 my-8 py-4 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Projects</h2>
        <Tabs onTabChange={(tab) => setActiveTab(tab)} />
      </div>

      {/* Projects */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 mt-4">
        {currentProjects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
            skills={project.skills}
            textColor={project.textColor}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
