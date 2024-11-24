import React, { useState } from "react";
import Project from "@/components/Project";
import Tabs from "@/components/Tabs";

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Software" | "Mechanical" | "Both">("Software");

  // Images should be 925x500
  const projects = [
    {
      title: "Object Recognition Robot",
      description: "Autonomous navigation and object recognition using a nearest neighbor algorithm, ROS, and OpenCV to identify objects based on image recognition.",
      slug: "object-recognition-robot",
      image: "/images/projects/object-recognition-robot.png",
      skills: ["C++", "ROS", "OpenCV"],
      tags: ["Software"],
      textColor: "dark",
    },
    {
      title: "Autonomous Mapping Robot",
      description: "Autonomous mapping and exploration of unknown environments using DFS, ROS, and SLAM, with path planning and obstacle detection.",
      slug: "autonomous-mapping-robot",
      image: "/images/projects/autonomous-mapping-robot.png",
      skills: ["C++", "ROS", "SLAM", "Algorithms"],
      tags: ["Software"],
      textColor: "dark",
    },
    {
      title: "Maze-Solving Rover",
      description: "An autonomous rover that navigates a maze, localizes, detects, picks up, and delivers a payload",
      slug: "maze-solving-rover",
      image: "/images/projects/maze-solving-rover2.png",
      skills: ["Python", "C", "Circuits"],
      tags: ["Software", "Mechanical"],
      textColor: "light",
    },
    {
      title: "ECU Module Opening Station",
      description: "Designed and implemented a cost-effective solution to open fully sealed ECU modules for PCB testing, eliminating CNC scheduling conflicts and fixture changeovers",
      slug: "module-opening-station",
      image: "/images/projects/module-opening-station.png",
      skills: ["CNC Programming", "DFM", "Prototyping"],
      tags: ["Mechanical"],
      textColor: "dark",
    },
    {
      title: "3D Printer",
      description: "Designed an entry-level 3D printer with enhanced speed, accuracy, and reliability features for professional use",
      slug: "3d-printer",
      image: "/images/projects/3DPrinter.png",
      skills: ["SolidWorks", "Mechanical Design"],
      tags: ["Mechanical"],
      textColor: "dark",
    },
    {
      title: "Kayak Carrier",
      description: "Designing and analyzing the strength and durability of a Kayak Carrier",
      slug: "kayak-carrier",
      image: "/images/projects/kayak.png",
      skills: ["SolidWorks", "FEA", "Motion Analysis"],
      tags: ["Mechanical"],
      textColor: "dark",
    },
    {
      title: "Remote Water Gun",
      description: "Designed and built a remote-controlled water gun with motorized pitch, yaw, and trigger mechanisms, using a Raspberry Pi for control and camera feedback.",
      slug: "remote-water-gun",
      image: "/images/projects/watergunirl.jpg",
      skills: ["Python", "3D-Printing"],
      tags: ["Mechanical"],
      textColor: "dark",
    },
    {
      title: "Industry 4.0 Research",
      description: "Remote communication between sensors and computers via OPC UA",
      slug: "SFU-research",
      skills: ["Python", "C", "Ignition"],
      tags: ["Software", "Mechanical"],
      textColor: "dark",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js, React, and Tailwind CSS.",
      link: "https://joshkwak.com",
      image: "/images/projects/portfolio.png",
      skills: ["Tailwind CSS", "React", "Next.js"],
      tags: ["Software"],
      textColor: "dark",
    },
  ];

  const filteredProjects = projects.filter((project) =>
    activeTab === "Both" || project.tags.includes(activeTab)
  );

  return (
    <section id="projects" className="mt-24 my-8 py-4 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Projects</h2>
        <Tabs onTabChange={(tab) => setActiveTab(tab)} />
      </div>

      {/* Projects */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 mt-4">
        {filteredProjects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            slug={project.slug}
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
