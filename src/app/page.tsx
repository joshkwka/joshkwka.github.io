"use client";

import React from "react";
import SidebarButton from "@/components/SidebarButton";
import HeroSection from "@/components/HeroSection";
import Education from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";
import ProjectsSection from "@/components/ProjectsSection";
import PhotoCarousel from "@/components/PhotoCarousel";

import { DarkModeProvider } from "@/contexts/DarkModeContext";

export default function Home() {

  return (
    <div className="scroll-container">
      <DarkModeProvider>
        {/* Main Content */}
        <HeroSection />
        <Education />
        <ProjectsSection />
        <WorkExperience />

        <PhotoCarousel />

        {/* Side Bar */}
        <SidebarButton />
      </DarkModeProvider>
    </div>
  );
}
