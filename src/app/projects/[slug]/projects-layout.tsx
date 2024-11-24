import React, { ReactNode } from "react";
import Link from "next/link";

interface ProjectsLayoutProps {
  children: ReactNode;
}

const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ children }) => {
  return (
    <div className="projects-layout bg-project-background text-foreground relative">
      <header className="bg-header-background text-header-foreground p-4">
        <h1 className="text-3xl font-bold">Projects</h1>
      </header>

      <main className="projects-content max-w-7xl mx-auto p-8 bg-project-background">
        {children}
      </main>

      {/* Floating Return to Portfolio Button */}
      <Link
        href="/"
        className="fixed bottom-6 right-6 px-4 py-2 font-bold text-blue-500 border border-blue-500 rounded-md transition-colors hover:text-white hover:bg-blue-500 shadow-lg"
      >
        Return to Portfolio
      </Link>
    </div>
  );
};

export default ProjectsLayout;
