import React, { useState } from "react";
import DropdownInfo from "@/components/DropdownInfo";
import Tabs from "@/components/Tabs";

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState<"Software" | "Mechanical">("Software");
  const [openJobs, setOpenJobs] = useState<{ [key: string]: boolean }>({});

  const workExperiences = [
    {
      id: "tesla",
      company: "Tesla",
      date: "2020 - Present",
      location: "Fremont, California, USA",
      positions: [
        {
          title: "Associate CAE Engineer",
          date: "Aug 2023 - Present",
          bulletPoints: [
            {
              category: "Mechanical",
              description: "Performed crash simulations to improve occupant safety.",
            },
            {
              category: "Software",
              description: "Developed software tools to analyze crash data.",
            },
            {
              category: "Both",
              description: "Both!",
            },
          ],
        },
        {
          title: "CAE Engineer Intern",
          date: "Jan 2023 - Jul 2023",
          bulletPoints: [
            {
              category: "Mechanical",
              description: "Analyzed crash simulations for various vehicle platforms.",
            },
          ],
        },
      ],
    },
    {
      id: "veoneer",
      company: "Veoneer",
      date: "2018 - 2020",
      location: "Markham, Ontario, Canada",
      positions: [
        {
          title: "NPPI Engineer Intern",
          date: "May 2022 - Dec 2022",
          bulletPoints: [
            {
              category: "Mechanical",
              description: "Designed and tested safety systems for autonomous vehicles.",
            },
          ],
        },
      ],
    },
  ];

  const toggleJob = (id: string) => {
    setOpenJobs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredWorkExperiences = workExperiences
    .map((job) => ({
      ...job,
      positions: job.positions
        .map((position) => ({
          ...position,
          bulletPoints: position.bulletPoints.filter(
            (point) => point.description && (point.category === activeTab || point.category === "Both")
          ),
        }))
        .filter((position) => position.bulletPoints.length > 0),
    }))
    .filter((job) => job.positions.length > 0);

  return (
    <section id="workexperience" className="mt-24 my-8 py-4 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <Tabs onTabChange={(tab) => setActiveTab(tab)} />
      </div>
      <div className="space-y-4">
        {filteredWorkExperiences.map((job) => (
          <DropdownInfo
            key={job.id}
            company={job.company}
            date={job.date}
            location={job.location}
            initiallyOpen={openJobs[job.id] ?? false}
            onToggle={() => toggleJob(job.id)}
            positions={job.positions}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
