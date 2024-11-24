import React, { useState } from "react";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  slug?: string;
  link?: string;
  image?: string;
  skills: string[];
  textColor?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  slug,
  link,
  image,
  skills,
  textColor = "dark",
}) => {
  const hasImage = image !== undefined;
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <>
      {/* Display the image */}
      {hasImage && (
        <img
          src={image}
          alt={title}
          className={`w-full object-cover transition-all transition-opacity duration-300 transform ${
            isHovered ? "backdrop-blur-md opacity-20" : "opacity-100"
          } z-10`}
          style={{
            height: "500px",
          }}
        />
      )}

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center z-10 text-center transition-opacity duration-300 ${
          isHovered || !hasImage ? "opacity-100 visibility-visible" : "opacity-0 visibility-hidden"
        }`}
      >
        <h3
          className={`text-2xl font-semibold ${
            textColor === "light" ? "text-var[var(--text-light)]" : "text-var[var(--text-dark)]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 ${
            textColor === "light" ? "text-var[var(--text-light)]" : "text-var[var(--text-dark)]"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Skills bubbles */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <div className="flex justify-center w-full">
      {slug ? (
        <Link
          href={`/projects/${slug}`} 
          className="block relative rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 w-full max-w-screen-reg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {content}
        </Link>
      ) : link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 w-full max-w-screen-reg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {content}
        </a>
      ) : (
        <div className="block relative rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 w-full max-w-screen-reg">
          {content}
        </div>
      )}
    </div>
  );
};

export default Project;
