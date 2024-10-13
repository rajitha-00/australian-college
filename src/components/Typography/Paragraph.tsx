type ParagraphProps = {
  paragraph: string;
  start?: boolean;
};

export const Paragraph = ({
  paragraph,
  start,
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={
        start
          ? "bodyText font-montserrat text-sm md:text-lg  mx-auto max-w-7xl text-textColorLight md:text-justify "
          : "bodyText font-montserrat text-sm md:text-lg mx-auto max-w-7xl text-textColorLight md:text-center "
      }
    >
      {paragraph}
    </p>
  );
};
