"use client";
import "./globals.css"; // Import global styles
import { Search } from "@/components/Search";
import {
  CoursesCategories,
  DiscoverPathway,
  InsightCard,
  SectionHeader,
  UniversitiesSection,
} from "@/components";
import { insightsData } from "@/constants";
import { ImageRightSection } from "@/components/imageRightSection";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      {/* Background Image */}

      <div
        className="absolute inset-x-0 -bottom-28 lg:-bottom-3 h-full lg:h-2/3 bg-no-repeat bg-center"
        style={{
          backgroundImage:
            'url("https://raw.githubusercontent.com/rajitha-00/acbt-blob/refs/heads/main/ACBT-Hero-New-v1.png")',
        }}
      ></div>
      <div className="relative z-10 px-5 mx-auto max-w-[1300px]  flex items-center justify-center md:justify-normal flex-col min-h-[100vh]">
        <div className="px-5 space-y-5 flex items-center justify-center flex-col pt:36 md:pt-44">
          <Fade triggerOnce direction="up">
            <h1
              className="text-3xl md:text-7xl text-center font-semibold bg-gradient-to-r from-[#007354] via-[#007756] to-[#00d79c] bg-clip-text text-transparent"
              style={{ lineHeight: "1.2" }}
            >
              Australian College
            </h1>
          </Fade>
          <Fade triggerOnce direction="up">
            <h2
              className="text-lg md:text-4xl text-subheading text-center font-semibold"
              style={{ lineHeight: "1.2" }}
            >
              Shaping Your Future with <br /> Confidence and Success.
            </h2>
          </Fade>
          <Fade triggerOnce direction="up">
            <Search />
          </Fade>
        </div>
      </div>
      <CoursesCategories />
      <SectionHeader
        title="Global Qualifications, Trusted for Success"
        text="ACBT, an Australian college with campuses in Colombo and Kandy, offers globally recognized qualifications in IT, Business, and Healthcare (Nursing). Whether you're looking to advance your career locally or continue your studies in Australia, our trusted programs equip you with the skills and credentials to achieve success on a global scale."
      />
      <div className="px-5 mx-auto max-w-[1300px] lg:px-0 flex flex-wrap justify-center">
        {insightsData.map((course) => (
          <Fade key={course.text} triggerOnce direction="up">
            <InsightCard
              imageUrl={course.imageUrl}
              text={course.text}
              value={course.value}
              key={course.text}
            />
          </Fade>
        ))}
      </div>
      <DiscoverPathway />
      {/* Section Universities */}
      <UniversitiesSection />
      <SectionHeader
        title="Why Choose ACBT?"
        text="No matter where you decide to study locally or abroad ACBT is your gateway to an internationally recognized degree. With seamless transfer options and partnerships with top universities worldwide, your success begins here."
      />
      <SectionHeader
        title="What’s happening at ACBT?"
        text="No matter where you decide to study locally or abroad ACBT is your gateway to an internationally recognized degree. With seamless transfer options and partnerships with top universities worldwide, your success begins here."
      />
      <div className="px-5 mx-auto max-w-[1300px] lg:px-0 flex flex-wrap justify-center">
        <ImageRightSection
          alt=""
          description="We’re here to help you explore your educational journey. Whether you need more information about our programs, campuses, or university partnerships, our team is ready to assist. Don’t hesitate to reach out!"
          path={
            "https://raw.githubusercontent.com/rajitha-00/acbt-blob/refs/heads/main/Contact%20Us.png"
          }
          subTitle=""
          title="Have Questions? Let's Connect!"
          title2="Let's Connect!"
          button="Contact Us"
        />
      </div>
    </>
  );
}
