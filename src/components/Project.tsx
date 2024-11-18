import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  link?: string; 
}

const Project: React.FC<ProjectProps> = ({ title, description, link }) => {
  return (
    <div
      className="p-6 rounded-lg shadow-lg transition-all duration-300"
      style={{
        height: "calc(100% - 20px)",
      }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a
        href={link}
        className="text-blue-500 mt-4 block"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
};

export default Project;
