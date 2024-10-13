type SubTitleProps = {
  subTitle: string;
};

export const SubTitle = ({ subTitle }: SubTitleProps): JSX.Element => {
  return (
    <h2
      className={
        "text-lg lg:text-3xl text-start font-medium font-montserrat text-subheading"
      }
    >
      {subTitle}
    </h2>
  );
};
