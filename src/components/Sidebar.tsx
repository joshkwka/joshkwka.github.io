import React from "react";
import DarkModeToggle from "@/components/DarkModeToggle";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar?: () => void;
}

export default function Sidebar({ isOpen = false, toggleSidebar }: SidebarProps) {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[var(--sidebar-background)] text-[var(--sidebar-foreground)] w-64 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out
      backdrop-blur-md shadow-lg z-20`}
    >
      <div className="flex justify-end p-2">
        <button
          onClick={toggleSidebar}
          className="fixed top-5 right-5 text-[var(--sidebar-foreground)] text-lg hover:text-gray-400 transition"
        >
          ✕
        </button>
      </div>
      <ul className="p-4 space-y-4">
        <li>
          <a
            href="#home"
            onClick={(e) => handleScrollToSection(e, "home")}
            className="block mt-8 px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#education"
            onClick={(e) => handleScrollToSection(e, "education")}
            className="block px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleScrollToSection(e, "projects")}
            className="block px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#workexperience"
            onClick={(e) => handleScrollToSection(e, "workexperience")}
            className="block px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
          >
            Work Experience
          </a>
        </li>
        <li>
          <a
            href="#photos"
            onClick={(e) => handleScrollToSection(e, "photos")}
            className="block px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
          >
            Photos
          </a>
        </li>
      </ul>

      <div className="absolute bottom-20 left-0 right-0 px-4">
        <DarkModeToggle />
      </div>
    </div>
  );
}
