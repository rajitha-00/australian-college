type SubTitleProps = {
  subTitle: string;
  start?: boolean;
};

export const SubTitle = ({ subTitle, start }: SubTitleProps): JSX.Element => {
  return (
    <h2
      className={
        start
          ? "sectionTitle text-xl  md:text-2xl lg:text-3xl font-montserrat md:font-[500] text-start text-primaryColor"
          : "sectionTitle text-xl  md:text-2xl lg:text-3xl font-montserrat md:font-[500] md:text-center text-primaryColor"
      }
    >
      {subTitle}
    </h2>
  );
};
