type PageTitleProps = {
  title: string;
  title2?: string;
};

export const PageTitle = ({ title, title2 }: PageTitleProps): JSX.Element => {
  return (
    <h2
      className={
        "text-xl lg:text-3xl text-start font-semibold font-montserrat text-subheading"
      }
    >
      {title} <br />
      {title2}
    </h2>
  );
};
