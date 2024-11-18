import React from "react";
import DropdownInfo from "@/components/DropdownInfo";

const Education = () => {
  return (
    <section id="education" className="mt-24 my-8 py-4 px-4">
        <div className="space-y-4">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
            {/* UofT Chemical Vehicles Design Team*/}
            <DropdownInfo
                company="University of Toronto"
                initiallyOpen={true}
                positions={[
                    {
                    title: "Bachelor of Applied Science - Mechanical Engineering",
                    // date: "(2019-2024)",
                    description: "Specializing in Mechatronics and Solid Mechanics and Design"
                    }
                ]}
                date="2019-2024"
                content="I studied Mechanical Engineering at the 
                    University of Toronto, specializing in Mechatronics and 
                    Solid Mechanics & Design. I am passionate about creating 
                    and improving modern technology, and would love to be a 
                    part of the innovative expansion of Engineering. 
                    My interests lie in AR/VR systems...
                    Apart from engineering, some of my interests include 
                    playing sports and exercising, and I also love to take 
                    photos."
            />
      </div>
    </section>
  );
};

export default Education;
