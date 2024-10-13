"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { PageTitle, Paragraph, SubTitle } from "../Typography";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type ImageLeftSectionProps = {
  title: string;
  path: string;
  description: string;
  alt: string;
  subTitle: string;
  title2?: string;
  button?: string;
};

export const ImageLeftSection = ({
  path,
  description,
  title,
  alt,
  subTitle,
  title2,
  button,
}: ImageLeftSectionProps): JSX.Element => {
  return (
    <Fade triggerOnce direction="up">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-32 lg:items-centerjustify-between h-full">
        <div className="md:col-span-1 lg:col-span-2 md:mt-0">
          <Fade triggerOnce direction="left">
            <Image
              className="h-auto md:w-full mx-auto rounded-[8px] md:rounded-20px]"
              width={400}
              height={400}
              src={path}
              alt={alt}
            />
          </Fade>
        </div>
        <div className="md:col-span-1 lg:col-span-3mt-10 md:mt-0 justify-start flex flex-col items-start">
          <Fade triggerOnce direction="right">
            <Fade triggerOnce direction="up">
              <PageTitle title2={title2} title={title} />
            </Fade>
            <Fade triggerOnce direction="up">
              <div className="mt-4">
                <SubTitle subTitle={subTitle} />
              </div>
            </Fade>
            <Fade triggerOnce direction="up">
              <div className="mt-4">
                <Paragraph paragraph={description} />
              </div>
            </Fade>
            <Fade triggerOnce direction="up">
              {button && (
                <button className="mt-4" onClick={() => {}}>
                  <div
                    className={`inline-flex items-center  flex-none rounded-md px-3 py-2 text-md font-[600] font-montserrat ${"bg-accentColor text-primary-main  "} `}
                  >
                    {button}
                    <ArrowRightIcon
                      className={`ml-1.5 -mr-0.5 h-5 w-5 lg:font-[500] text-md font-montserrat  text-primary-main`}
                      aria-hidden="true"
                    />
                  </div>
                </button>
              )}
            </Fade>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};
