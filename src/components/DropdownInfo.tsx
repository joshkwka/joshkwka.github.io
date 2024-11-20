import React, { useState } from "react";

interface BulletPoint {
  category?: string;
  description: string;
}

interface Position {
  title: string;
  date?: string;
  bulletPoints: BulletPoint[];
}

interface DropdownInfoProps {
  company: string;
  date?: string;
  location?: string;
  positions: Position[];
  initiallyOpen?: boolean;
  onToggle?: () => void;
}

const DropdownInfo: React.FC<DropdownInfoProps> = ({
  company,
  date,
  location,
  positions = [],
  initiallyOpen = false,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (onToggle) { 
      onToggle();
    }
  };

  return (
    <div className="mb-4">
      <button
        onClick={toggleDropdown}
        className="rounded-lg w-full flex justify-between items-center px-4 py-2 text-lg font-bold
          bg-[var(--header-background)] text-var[var(--header-foreground)]
          hover:bg-[var(--header-hover-background)] text-var[var(--header-hover-foreground)]"
      >
        <span className="text-lg">{company}</span>
        {date && <span className="text-sm">{date}</span>}
      </button>

      <div
        className={`px-4 py-2 overflow-hidden transition-all duration-450 ease-in-out ${
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {location && (
          <h3 className="text-sm font-medium mb-2">Location: {location}</h3>
        )}
        <div className="space-y-4">
          {positions.map((position, index) => (
            <div key={index}>
              <h3 className="text-md font-semibold flex justify-between items-center">
                {position.title}
                {position.date && (
                  <span className="text-sm text-right">{position.date}</span>
                )}
              </h3>
              <ul className="list-disc pl-5">
                {(position.bulletPoints || []).map((point, idx) => (
                  <li key={idx}>
                    {point.description} <span className="text-sm"></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownInfo;
