import Image from "next/image";

interface CardProps {
  name: string;
  url: string;
  alt: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const { name, url, alt } = props;
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-lg border rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={url}
        alt={alt}
        width={250}
        height={200}
        className="rounded-md mb-4"
      />
      <h1 className="text-lg font-semibold text-center">{name}</h1>
    </div>
  );
};
