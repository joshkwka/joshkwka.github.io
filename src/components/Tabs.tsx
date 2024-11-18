"use client";

import React, { useState } from "react";

interface TabsProps {
  onTabChange: (tab: "Software" | "Mechanical") => void;
}

const Tabs: React.FC<TabsProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<"Software" | "Mechanical">("Software");

  const handleTabClick = (tab: "Software" | "Mechanical") => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex space-x-4">
      <button
        className={`px-4 py-2 font-bold ${
          activeTab === "Software"
            ? "text-white bg-blue-500"
            : "text-blue-500 border border-blue-500"
        } rounded-md transition-colors`}
        onClick={() => handleTabClick("Software")}
      >
        Software
      </button>
      <button
        className={`px-4 py-2 font-bold ${
          activeTab === "Mechanical"
            ? "text-white bg-blue-500"
            : "text-blue-500 border border-blue-500"
        } rounded-md transition-colors`}
        onClick={() => handleTabClick("Mechanical")}
      >
        Mechanical
      </button>
    </div>
  );
};

export default Tabs;
