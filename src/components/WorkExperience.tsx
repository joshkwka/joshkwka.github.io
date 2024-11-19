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
      category: "Both",
      positions: [
        {
          title: "Associate CAE Engineer",
          date: "Aug 2023 - Present",
          category: "Mechanical",
          description: "...",
        },
        {
          title: "CAE Engineer Intern",
          date: "Jan 2023 - Jul 2023",
          category: "Mechanical",
          description: "Performed crash simulations and analysis to improve occupant safety across multiple vehicle platforms.",
        },
      ],
    },
    {
      id: "veoneer",
      company: "Veoneer",
      date: "2018 - 2020",
      location: "Markham, Ontario, Canada",
      category: "Mechanical",
      positions: [
        {
          title: "NPPI Engineer Intern",
          date: "May 2022 - Dec 2022",
          category: "Mechanical",
          description: "...",
        },
      ],
    },
    {
      id: "utcv",
      company: "University of Toronto Chemical Vehicles Design Team",
      date: "2018 - 2020",
      location: "Toronto, Ontario, Canada",
      category: "Both",
      positions: [
        {
          title: "NPPI Engineer Intern",
          date: "May 2022 - Dec 2022",
          category: "Software",
          description: "...",
        },
      ],
    },
    {
      id: "sfu",
      company: "Simon Fraser University",
      date: "2018 - 2020",
      location: "Markham, Ontario, Canada",
      category: "Software",
      positions: [
        {
          title: "NPPI Engineer Intern",
          date: "May 2022 - Dec 2022",
          category: "Software",
          description: "...",
        },
      ],
    },
    {
      id: "fsae",
      company: "University of Toronto FSAE Design Team",
      date: "2018 - 2020",
      location: "Markham, Ontario, Canada",
      category: "Software",
      positions: [
        {
          title: "NPPI Engineer Intern",
          date: "May 2022 - Dec 2022",
          category: "Software",
          description: "...",
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

  const filteredWorkExperiences = workExperiences.filter(
    (job) => job.category === activeTab || job.category === "Both"
  );

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
            positions={job.positions.filter(
              (position) => position.category === activeTab || position.category === "Both"
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;