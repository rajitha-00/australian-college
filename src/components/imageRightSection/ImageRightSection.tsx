"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { PageTitle, Paragraph, SubTitle } from "../Typography";
type ImageRightSectionProps = {
  title: string;
  subTitle: string;
  path: string;
  description: string;
  alt: string;
};

export const ImageRightSection = ({
  path,
  subTitle,
  description,
  title,
  alt,
}: ImageRightSectionProps): JSX.Element => {
  return (
    <Fade triggerOnce direction="up">
      <div className="grid md:grid-cols-5 gap-10 md:gap-32 items-center justify-between h-full">
        <div className="col-span-1 block md:hidden md:col-span-2">
          <Fade triggerOnce direction="up">
            <Image
              className="h-auto w-[500px] md:w-[600px] rounded-[16px] md:rounded-[60px] mx-auto"
              width={"400"}
              height={"400"}
              src={path}
              alt={alt}
            />
          </Fade>
        </div>
        <div className="col-span-1 md:col-span-3">
          <Fade triggerOnce direction="left">
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
        <div className="col-span-1 hidden md:block md:col-span-2">
          <Fade triggerOnce direction="right">
            <Image
              className="h-auto w-[500px] md:w-[600px] md:rounded-[60px] mx-auto"
              width={"400"}
              height={"400"}
              src={path}
              alt={alt}
            />
          </Fade>
        </div>
      </div>
    </Fade>
  );
};
