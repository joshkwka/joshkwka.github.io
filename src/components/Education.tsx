import React from "react";
import DropdownInfo from "@/components/DropdownInfo";

const Education = () => {
  return (
    <section id="education" className="mt-24 my-8 py-4 px-4">
      <div className="space-y-4">
        <h2 className="text-2xl xs:text-3xl font-bold mb-6">Education</h2>

        {/* Georgia Tech */}
        <DropdownInfo
          company="Georgia Tech"
          initiallyOpen={true} 
          positions={[
            {
              title: "Master of Science - Computer Science",
              bulletPoints: [
                {
                  description: "Specializing in computing systems",
                },
                {
                  description: "Coursework to include subjects such as Artificial Intelligence, Machine Learning, Software Development, and Data Science",
                },
              ],
            }
          ]}
          date="2025-Present"
          location="Atlanta, Georgia, United States (Online)"
        />

        {/* University of Toronto */}
        <DropdownInfo
          company="University of Toronto"
          initiallyOpen={true} 
          positions={[
            {
              title: "Bachelor of Applied Science - Mechanical Engineering",
              bulletPoints: [
                {
                  description: "GPA 3.92/4.0",
                },
                {
                  description: "Specialized in Mechatronics, integrating mechanical, software, and electrical engineering to develop innovative technologies",
                },
                {
                  description: "Coursework in Control Systems, Mechatronics Principles, Mechatronics Systems: Design & Integration, Numerical Methods, Differential Equations, Probability and Statistics, Fundamentals of Computer Programming, and more"
                },
                {
                  description: "Dean's Honours List: Fall 2019, Winter 2020, Fall 2020, Winter 2021, Fall 2022, Winter 2023, Fall 2023, Winter 2024",
                },
                {
                  description: "Recipient of the Constant Temperature Control Ltd Scholarship on the basis of high academic standing in Third Year",
                },
                {
                  description: "Recipient of the Baptie Scholarship for achieving the highest aggregate percentage of marks in the first year annual examinations",
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
