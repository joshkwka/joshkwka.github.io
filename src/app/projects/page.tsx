'use client'

import React, { useState } from 'react';
import ProjectsSection from '@/components/ProjectsSection';

import { DarkModeProvider } from '@/contexts/DarkModeContext';

export default function Home() {

  return (
    <div className="scroll-container">
      <DarkModeProvider>
        <ProjectsSection />
      </DarkModeProvider>
    </div>
  );
}
