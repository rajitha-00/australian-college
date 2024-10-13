type ParagraphProps = {
  paragraph: string;
};

export const Paragraph = ({ paragraph }: ParagraphProps): JSX.Element => {
  return (
    <p className={"text-[16px] text-start font-montserrat text-subheading"}>
      {paragraph}
    </p>
  );
};
