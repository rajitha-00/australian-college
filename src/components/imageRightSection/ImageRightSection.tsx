"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { PageTitle, Paragraph, SubTitle } from "../Typography";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type ImageRightSectionProps = {
  title: string;
  title2?: string;
  subTitle: string;
  path: string;
  description: string;
  alt: string;
  button?: string;
};

export const ImageRightSection = ({
  path,
  subTitle,
  description,
  title,
  alt,
  title2,
  button,
}: ImageRightSectionProps): JSX.Element => {
  return (
    <Fade triggerOnce direction="up">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-32 lg:items-center justify-between h-full">
        <div className="col-span-1 block md:hidden md:col-span-2">
          <Fade triggerOnce direction="up">
            <Image
              className="h-auto w-full md:w-[600px] rounded-[16px] md:rounded-[60px] mx-auto"
              width={400}
              height={400}
              src={path}
              alt={alt}
            />
          </Fade>
        </div>

        <div className="col-span-1 md:col-span-1 lg:col-span-3 justify-start flex flex-col items-start">
          <Fade triggerOnce direction="left">
            <Fade triggerOnce direction="up">
              <PageTitle title2={title2} title={title} />
            </Fade>
            <Fade triggerOnce direction="up">
              <div className="mt-4">
                {/* Reduced margin for spacing */}
                <SubTitle subTitle={subTitle} />
              </div>
            </Fade>
            <Fade triggerOnce direction="up">
              <div className="mt-4">
                {/* Reduced margin for spacing */}
                <Paragraph paragraph={description} />
              </div>
            </Fade>
            <Fade triggerOnce direction="up">
              {button && (
                <button
                  className="mt-4 justify-start items-center rounded-md px-3 py-2 text-md font-[600] font-montserrat bg-accentColor text-primary-main  "
                  onClick={() => {}}
                >
                  <div className={`inline-flex items-center  flex-none  `}>
                    {button}{" "}
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

        <div className="col-span-1 hidden md:block md:col-span-1 lg:col-span-2">
          <Fade triggerOnce direction="right">
            <Image
              className="h-auto w-[500px] md:w-[600px] rounded-[8px] md:rounded-20px] mx-auto"
              width={400}
              height={400}
              src={path}
              alt={alt}
            />
          </Fade>
        </div>
      </div>
    </Fade>
  );
};
