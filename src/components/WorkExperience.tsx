import React, { useState } from "react";
import DropdownInfo from "@/components/DropdownInfo";
import Tabs from "@/components/Tabs";

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState<"Software" | "Mechanical">("Software");
  const [openJobs, setOpenJobs] = useState<{ [key: string]: boolean }>({
    tesla: true, 
  });

  const workExperiences = [
    {
      id: "tesla",
      company: "Tesla",
      date: "2023, 2024 - Present",
      location: "Fremont, California, USA",
      positions: [
        {
          title: "Associate Analysis Engineer",
          date: "Aug 2024 - Present",
          bulletPoints: [
            {
              category: "Mechanical",
              description: "Performed modal analysis using Abaqus to evaluate natural frequencies and mode shapes of vehicle systems, ensuring structural integrity",
            },
            {
              category: "Mechanical",
              description: "Conducted strength and durability analyses with Abaqus, including S-N and E-N fatigue simulations, to predict vehicle performance and optimize design longevity",
            },
            {
              category: "Software",
              description: "Developed a Python script leveraging RegEx for string identification and glob for directory parsing on Linux to identify and modify abaqus include files across simulation iterations, significantly streamlining workflow efficiency",
            },
            {
              category: "Software",
              description: "Built a mass-representation generation tool that automatically creates mass representations of components using CSV input coordinates. This tool significantly enhanced model accuracy and reduced processing time from 5–10 minutes to under 30 seconds",
            },
          ],
        },
        {
          title: "Analysis Engineer Intern",
          date: "Jan 2023 - Jul 2023",
          bulletPoints: [
            {
              category: "Mechanical",
              description: "Worked alongside design, test, and manufacturing team engineers to optimize Tesla vehicles for occupant safety",
            },
            {
              category: "Mechanical",
              description: "Conducted FEA of interior head impacts, making sure Tesla’s interior trim strictly meet FMVSS and ECE-R21 standards",
            },
            {
              category: "Mechanical",
              description: "Utilized ANSA, Primer, META, and LS-DYNA to build, simulate, and analyze finite element (FE) models of Tesla’s vehicles",
            },
            {
              category: "Mechanical",
              description: "Designed energy absorbing countermeasures to reduce probability of injury under head impact against the vehicle interior",
            },
            {
              category: "Mechanical",
              description: "Enhanced the accuracy of each simulation through root-cause analysis of the corresponding physical tests",
            },
            {
              category: "Mechanical",
              description: "Worked with designers on a compressed timeline to resolve issues of the glovebox door opening during instrument panel tests",
            },
          ],
        },
      ],
    },
    {
      id: "veoneer",
      company: "Veoneer (formerly Autoliv)",
      date: "2022",
      location: "Markham, Ontario, Canada",
      positions: [
        {
          title: "NPPI Engineer Intern",
          date: "May 2022 - Dec 2022",
          bulletPoints: [
            {
              category: "Both",
              description: "PLC programmed label printers and cameras to accommodate the production of foreign products",
            },
            {
              category: "Mechanical",
              description: "Conducted strain tests to validate the launch of new products and introduction of new production lines",
            },
            {
              category: "Mechanical",
              description: "Designed an ECU module fixture and programmed a CNC machine to open modules and allow PCB troubleshooting",
            },
            {
              category: "Both",
              description: "Introduced a new ‘3D Print Queue’ program, allowing all of the plant’s engineers to be able to request 3D printed parts",
            },
          ],
        },
      ],
    },
    {
      id: "utfr",
      company: "University of Toronto Formula Racing",
      date: "2019 - 2022",
      location: "Toronto, Ontario, Canada",
      positions: [
        {
          title: "Chassis Engineer",
          date: "Sep 2019 - Dec 2022",
          bulletPoints: [
            {
              category: "Mechanical",
              description: "Set-up and conducted torsional stiffness tests to calculate the rigidity of the chassis",
            },
            {
              category: "Mechanical",
              description: "Designed a jig to allow accurate welding of the chassis",
            },
            {
              category: "Mechanical",
              description: "Designed and conducted FEA on other small components on the car",
            },
          ],
        },
      ],
    },
    {
      id: "utcv",
      company: "University of Toronto Chemical Vehicles",
      date: "2021",
      location: "Toronto, Ontario, Canada",
      positions: [
        {
          title: "Lead Mechatronics Engineer",
          date: "Sep 2021 - Dec 2021",
          bulletPoints: [
            {
              category: "Software",
              description: "Programmed an Arduino to interface with a color sensor for real-time detection of chemical reaction progress",
            },
            {
              category: "Software",
              description: "Designed and wired circuits to power and connect the Arduino, color sensor, and motor controllers",
            },
            {
              category: "Software",
              description: "Used the Arduino to process sensor data and trigger a motor stop mechanism upon detecting the specified color change",
            },
            {
              category: "Mechanical",
              description: "Designed mounts to properly align sensors with the chemical timer",
            },
          ],
        },
      ],
    },
    {
      id: "sfu",
      company: "Faculty of Applied Sciences at Simon Fraser University",
      date: "2021",
      location: "Surrey, British Columbia, Canada",
      positions: [
        {
          title: "Industry 4.0 Research Assistant",
          date: "May 2021 - Aug 2021",
          bulletPoints: [
            {
              category: "Software",
              description: "Programmed Arduino using C to collect and process sensor data",
            },
            {
              category: "Software",
              description: "Developed a Python script enabling Raspberry Pi to receive Arduino data via Serial, facilitating communication between physical hardware and virtual systems",
            },
            {
              category: "Software",
              description: "Configured an OPC UA server on Raspberry Pi, establishing communication with local PCs using Inductive Automation’s Ignition",
            },
            {
              category: "Software",
              description: "Leveraged Ignition SCADA to create scheduled reports and dashboards for sensor data visualization, optimizing preparation for testing with manufacturing robots",
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
