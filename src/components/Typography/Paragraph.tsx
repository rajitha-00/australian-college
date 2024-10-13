type ParagraphProps = {
  paragraph: string;
  start?: boolean;
};

export const Paragraph = ({
  paragraph,
  start,
}: ParagraphProps): JSX.Element => {
  return (
    <p className={"text-[16px] text-start font-montserrat text-subheading"}>
      {paragraph}
    </p>
  );
};
