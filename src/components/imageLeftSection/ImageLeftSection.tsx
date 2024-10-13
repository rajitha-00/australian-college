"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { PageTitle, Paragraph, SubTitle } from "../Typography";
type ImageLeftSectionProps = {
  title: string;
  path: string;
  description: string;
  alt: string;
  subTitle: string;
};

export const ImageLeftSection = ({
  path,
  description,
  title,
  alt,
  subTitle,
}: ImageLeftSectionProps): JSX.Element => {
  return (
    <Fade triggerOnce direction="up">
      <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-between h-full">
        <div className="col-span-2 md:mt-0">
          <Fade triggerOnce direction="left">
            <Image
              className="h-auto md:w-full mx-auto"
              width={"400"}
              height={"400"}
              src={path}
              alt={alt}
            />
          </Fade>
        </div>
        <div className="col-span-3 mt-10 md:mt-0">
          <Fade triggerOnce direction="right">
            <Fade triggerOnce direction="up">
              <PageTitle start title={title} />
            </Fade>
            <Fade triggerOnce direction="up">
              <div className="mt-5">
                <SubTitle start subTitle={subTitle} />
              </div>
            </Fade>
            <Fade triggerOnce direction="up">
              <div className="mt-5">
                <Paragraph start paragraph={description} />
              </div>
            </Fade>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};
