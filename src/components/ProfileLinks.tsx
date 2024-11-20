import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const ProfileLinks: React.FC = () => {
  const links = [
    { href: "https://www.linkedin.com/in/joshkwak/", icon: <FaLinkedin /> },
    { href: "https://www.instagram.com/kwak.ii", icon: <FaInstagram /> },
    { href: "https://github.com/joshkwka", icon: <FaGithub /> },
  ];

  return (
    <div className="flex justify-center space-x-5 py-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--sidebar-foreground)] text-2xl hover:text-gray-400 transition-colors duration-200 ease-in-out"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default ProfileLinks;
