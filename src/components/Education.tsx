import React from "react";
import DropdownInfo from "@/components/DropdownInfo";

const Education = () => {
  return (
    <section id="education" className="mt-24 my-8 py-4 px-4">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold mb-6">Education</h2>

        {/* University of Toronto */}
        <DropdownInfo
          company="University of Toronto"
          initiallyOpen={true} 
          positions={[
            {
              title: "Bachelor of Applied Science - Mechanical Engineering",
              bulletPoints: [
                {
                  description: "Specializing in Mechatronics and Solid Mechanics and Design",
                },
                {
                  description: "Courses included Thermodynamics, Kinematics, and Design",
                },
                {
                  description: "Led projects focused on automation and robotics",
                },
              ],
            }
          ]}
          date="2019-2024"
          location="Toronto, Ontario, Canada"
        />
      </div>
    </section>
  );
};

export default Education;
