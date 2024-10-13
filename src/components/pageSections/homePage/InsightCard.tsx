import React from "react";
import Image from "next/image";

interface InsightCardProps {
  imageUrl: string;
  value: string;
  text: string;
}

export const InsightCard: React.FC<InsightCardProps> = ({
  imageUrl,
  value,
  text,
}) => {
  return (
    <div className="flex min-w-[250px] flex-col p-5 border rounded-md transition duration-300 hover:border-accentColor border-transparent">
      <div className="flex justify-start h-20 items-center space-x-4 mb-4">
        <Image src={imageUrl} alt="Insight Image" width={40} height={35} />
        <h1 className="text-4xl font-semibold text-subheading">{value}</h1>
      </div>
      <p className="text-lg font-medium text-subheading font-montserrat">
        {text}
      </p>
    </div>
  );
};
