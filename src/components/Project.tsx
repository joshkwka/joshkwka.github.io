import Link from "next/link";
import Image from "next/image";

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

  return (
    <div className="flex justify-center w-full">
      {slug ? (
        <Link
          href={`/projects/${slug}`}
          className="group block relative rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 w-full max-w-screen-reg"
        >
          {/* Image */}
          {hasImage && (
            <div className="relative w-full h-[500px]">
              <Image
                src={image}
                alt={title || "Project image"}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 transform group-hover:backdrop-blur-md group-hover:opacity-20"
              />
            </div>
          )}

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
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

          {/* Skills */}
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
        </Link>
      ) : link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 w-full max-w-screen-reg"
        >
          {/* Image */}
          {hasImage && (
            <div className="relative w-full h-[500px]">
              <Image
                src={image}
                alt={title || "Project image"}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 transform group-hover:backdrop-blur-md group-hover:opacity-20"
              />
            </div>
          )}

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
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

          {/* Skills */}
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
        </a>
      ) : (
        <div className="block relative rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 w-full max-w-screen-reg">
          {/* Image */}
          {hasImage && (
            <div className="relative w-full h-[500px]">
              <Image
                src={image}
                alt={title || "Project image"}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 transform"
              />
            </div>
          )}

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center transition-opacity duration-300">
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

          {/* Skills */}
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
        </div>
      )}
    </div>
  );
};

export default Project;
