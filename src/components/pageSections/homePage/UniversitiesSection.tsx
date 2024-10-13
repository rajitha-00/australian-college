import { ImageLeftSection } from "@/components/imageLeftSection";
import { SectionHeader } from "../sectionHeader";
import { ImageRightSection } from "@/components/imageRightSection";

export const UniversitiesSection = () => {
  return (
    <div className="text-center py-16 px-5 mx-auto max-w-[1300px] lg:px-0 ">
      <SectionHeader title="Explore Your Global Education Journey" text="" />
      <ImageLeftSection
        alt=""
        description="Experience world-class education right here in Sri Lanka, without leaving motherland and the pioneer of Australian Higher Education. Complete your pathway programs with ACBT, providing you with a globally recognized degree at an affordable price."
        path={
          "https://raw.githubusercontent.com/rajitha-00/acbt-blob/refs/heads/main/ACBT-Hero.png"
        }
        subTitle="Stay Close, Go Far!"
        title="Study in Sri Lanka  
ACBT : Excellence at Home"
      />
      <ImageRightSection
        alt=""
        description="Experience world-class education right here in Sri Lanka, without leaving motherland and the pioneer of Australian Higher Education. Complete your pathway programs with ACBT, providing you with a globally recognized degree at an affordable price."
        path={
          "https://raw.githubusercontent.com/rajitha-00/acbt-blob/refs/heads/main/ACBT-Hero.png"
        }
        subTitle="Stay Close, Go Far!"
        title="Study in Sri Lanka  
ACBT : Excellence at Home"
      />
      <ImageLeftSection
        alt=""
        description="Experience world-class education right here in Sri Lanka, without leaving motherland and the pioneer of Australian Higher Education. Complete your pathway programs with ACBT, providing you with a globally recognized degree at an affordable price."
        path={
          "https://raw.githubusercontent.com/rajitha-00/acbt-blob/refs/heads/main/ACBT-Hero.png"
        }
        subTitle="Stay Close, Go Far!"
        title="Study in Sri Lanka  
ACBT : Excellence at Home"
      />
    </div>
  );
};
