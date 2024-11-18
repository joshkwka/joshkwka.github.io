import React, { useState } from "react";
import Project from "@/components/Project";
import Tabs from "@/components/Tabs";

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Software" | "Mechanical">("Software");

  const softwareProjects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS.",
      link: "https://joshkwak.com",
    },
    {
        title: "Example Project",
        description: "example description.",
        link: "https://google.com",
    },
    {
      title: "Example Project",
      description: "example description.",
      link: "https://google.com",
    },
    {
      title: "Example Project",
      description: "example description.",
      link: "https://google.com",
    },
    {
      title: "Example Project",
      description: "example description.",
      link: "https://google.com",
    },
    {
      title: "Example Project",
      description: "example description.",
      link: "https://google.com",
    },
  ];

  const mechanicalProjects = [
    {
        title: "Example Project",
        description: "example description.",
        link: "https://google.com",
    },
    {
      title: "Example Project",
      description: "example description.",
      link: "https://google.com",
    },
    {
      title: "Example Project",
      description: "example description.",
      link: "https://google.com",
    },
    {
      title: "Example Project",
      description: "example description.",
      link: "https://google.com",
    },
    {
      title: "Example Project",
      description: "example description.",
      link: "https://google.com",
    },
    {
      title: "Example Project",
      description: "example description.",
      link: "https://google.com",
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
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
