import React from "react";

interface TextSectionProps {
  title: string;
  text: string;
  imageSrc?: string; 
  imageAlt?: string; 
}

const TextSection: React.FC<TextSectionProps> = ({ title, text, imageSrc, imageAlt }) => {
  const paragraphs = text.split("\n\n");

  return (
    <section className="bg-white py-16 px-8 md:px-16 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
        {/* Image Section */}
        {imageSrc && imageAlt && (
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Text Section */}
        <div className="space-y-4 md:w-2/3">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-xl text-gray-700">
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TextSection;
