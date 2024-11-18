import React from "react";
import DropdownInfo from "@/components/DropdownInfo";
import Tabs from "@/components/Tabs";

const WorkExperience = () => {
  
  return (
    <section id="workexperience" className="mt-24 my-8 py-4 px-4">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold">Work Experience</h2>
        <Tabs onTabChange={(tab) => setActiveTab(tab)} />
      </div>
      <div className="space-y-4">
        {/* Example with multiple positions */}
        <DropdownInfo
          company="Tesla"
          date="2020 - Present"
          location="Fremont, California, USA"
          initiallyOpen={true}
          positions={[
            {
              title: "Associate CAE Engineer",
              date: "Aug 2023 - Present",
              description:
                "...",
            },
            {
              title: "CAE Engineer Intern",
              date: "Jan 2023 - Jul 2023",
              description:
                "Performed crash simulations and analysis to improve occupant safety across multiple vehicle platforms.",
            },
          ]}
        />
        {/* Veoneer */}
        <DropdownInfo
          company="Veoneer"
          date="2018 - 2020"
          location="Markham, Ontario, Canada"
          positions={[
            {
              title: "NPPI Engineer Intern",
              date: "May 2022 - Dec 2022",
              description:
                "...",
            },
          ]}
        />
        {/* SFU */}
        <DropdownInfo
          company="Simon Fraser University"
          date="20xx"
          content="..."
        />
        {/* UofT FSAE Design Team */}
        <DropdownInfo
          company="University of Toronto FSAE Design Team"
          date="20xx"
          content="..."
        />
        {/* UofT Chemical Vehicles Design Team*/}
        <DropdownInfo
          company="University of Toronto Chemical Vehicles Design Team"
          date="20xx"
          content="..."
        />
      </div>
    </section>
  );
};

export default WorkExperience;
