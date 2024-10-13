type SubTitleProps = {
  subTitle: string;
  start?: boolean;
};

export const SubTitle = ({ subTitle, start }: SubTitleProps): JSX.Element => {
  return (
    <h2
      className={
        "text-xl text-start font-medium font-montserrat text-subheading"
      }
    >
      {subTitle}
    </h2>
  );
};
