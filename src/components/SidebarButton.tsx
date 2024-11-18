"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function SidebarButton() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setSidebarOpen(true)}
        onMouseLeave={() => setSidebarOpen(false)} 
      >
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {!isSidebarOpen && ( 
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[var(--sidebar-background)] transition-colors duration-200 ease-in-out"
        >
          ☰
        </button>
      )}
    </div>
  );
}
