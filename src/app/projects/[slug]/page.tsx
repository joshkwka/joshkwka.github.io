import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown"; 
import ProjectsLayout from "@/app/projects/[slug]/projects-layout";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectPageProps {
  content: string;
  title: string;
  link?: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ content, title, link }) => {
  return (
    <ProjectsLayout>
      <div className="flex items-center space-x-2">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-3xl font-extrabold text-blue-500 hover:text-blue-700">
            {title}
            <FaExternalLinkAlt className="inline ml-2" size={20} />
          </a>
        ) : (
          <h1 className="text-3xl font-extrabold text-blue-500">{title}</h1>
        )}
      </div>
      
      <div className="project-content">
        <ReactMarkdown
          components={{
            h1: (props) => (
              <h1 className="text-4xl font-extrabold text-[var(--foreground)] mt-6 mb-4" {...props} />
            ),
            h2: (props) => (
              <h2 className="text-3xl font-semibold text-[var(--foreground)] mt-5 mb-3" {...props} />
            ),
            h3: (props) => (
              <h3 className="text-2xl font-semibold text-[var(--foreground)] mt-4 mb-2" {...props} />
            ),
            p: (props) => (
              <p className="mb-4" {...props} />
            ),
            img: (props) => (
              <img className="my-4" {...props} />
            ),
            ul: (props) => (
              <ul className="list-disc ml-8" {...props} />
            ),
            li: (props) => (
              <li className="my-2" {...props} />
            ),
            a: (props) => (
              <a
                {...props}
                className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-500 rounded-md transition-colors hover:text-white hover:bg-blue-700"
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown> 
      </div>
    </ProjectsLayout>
  );
};

export async function generateStaticParams() {
  const projectDirectory = path.join(process.cwd(), "src/app/projects/project-info");
  const filenames = fs.readdirSync(projectDirectory);

  const paths = filenames.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));

  return paths.map((slug) => ({
    params: { slug },
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const projectDirectory = path.join(process.cwd(), "src/app/projects/project-info");
  const fullPath = path.join(projectDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    title: data.title, 
  };
}

const ProjectPageWrapper = async ({ params }: { params: { slug: string } }) => {
  const projectDirectory = path.join(process.cwd(), "src/app/projects/project-info");
  const fullPath = path.join(projectDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return <ProjectPage title={data.title} content={content} link={data.link} />;
};

export default ProjectPageWrapper;
