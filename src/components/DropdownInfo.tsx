import React, { useState, useRef } from "react";

interface Position {
  title: string;
  date?: string;
  description: string;
}

interface DropdownInfoProps {
  company: string;
  date?: string;
  location?: string;
  positions?: Position[];
  content?: string | React.ReactNode;
  initiallyOpen?: boolean;
}

const DropdownInfo: React.FC<DropdownInfoProps> = ({
  company,
  date,
  location,
  positions,
  content,
  initiallyOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4"> {/* border-b border-[var(--border)]"> */}
      {/* Company and Overall Date */}
      <button
        onClick={toggleDropdown}
        className="rounded-lg w-full flex justify-between items-center px-4 py-2 text-lg font-bold
          bg-[var(--header-background)] text-var[var(--header-foreground)]
          hover:bg-[var(--header-hover-background)] text-var[var(--header-hover-foreground)]"
      >
        <span className="text-lg">{company}</span>
        {date && <span className="text-sm">{date}</span>}
      </button>

      {/* Content with smooth sliding transition */}
      <div
        ref={contentRef}
        className={`px-4 py-2 overflow-hidden transition-all duration-450 ease-in-out ${
          isOpen
            ? "max-h-[800px] opacity-100" // Expand dropdown
            : "max-h-0 opacity-0" // Collapse dropdown
        }`}
      >
        {/* Location */}
        {location && (
          <h3 className="text-sm font-medium mb-2">
            Location: {location}
          </h3>
        )}
        {/* Multiple Positions */}
        {positions ? (
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div key={index}>
                <h3 className="text-md font-semibold">
                  {position.title}{" "}
                  <span className="text-sm">{date && position.date}</span>
                </h3>
                <p>{position.description}</p>
              </div>
            ))}
          </div>
        ) : (
          // Single Role
          typeof content === "string" ? (
            <p>{content}</p>
          ) : (
            content
          )
        )}
      </div>
    </div>
  );
};

export default DropdownInfo;
