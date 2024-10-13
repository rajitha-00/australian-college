"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

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
      <Fade triggerOnce direction="up">
        <h2 className="text-3xl md:text-4xl text-center font-semibold bg-gradient-to-r from-[#007354] via-[#007756] to-[#00d79c] bg-clip-text text-transparent">
          {title}
        </h2>
      </Fade>
      <Fade triggerOnce direction="up">
        <p className="pt-8 font-montserrat text-[16px] text-subheading">
          {text}
        </p>
      </Fade>
    </div>
  );
};
