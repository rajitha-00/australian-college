import React from "react";

interface SectionHeaderProps {
  title: string;
  text?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  text,
}) => {
  return (
    <div className="text-center py-16 px-5 mx-auto max-w-[1300px] lg:px-0">
      <h2 className="text-3xl md:text-4xl text-center font-semibold bg-gradient-to-r from-[#007354] via-[#007756] to-[#00d79c] bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="pt-8 font-montserrat text-[16px] text-subheading">{text}</p>
    </div>
  );
};
