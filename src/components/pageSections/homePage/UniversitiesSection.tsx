import { ImageLeftSection } from "@/components/imageLeftSection";
import { SectionHeader } from "../sectionHeader";
import { ImageRightSection } from "@/components/imageRightSection";

export const UniversitiesSection = () => {
  return (
    <div className="text-center py-16 px-5 mx-auto max-w-[1300px] lg:px-0 ">
      <SectionHeader title="Explore Your Global Education Journey" text="" />
      <div className="flex flex-col space-y-20">
        <ImageLeftSection
          alt=""
          description="Experience world-class education right here in Sri Lanka, without leaving motherland and the pioneer of Australian Higher Education. Complete your pathway programs with ACBT, providing you with a globally recognized degree at an affordable price."
          path={
            "https://raw.githubusercontent.com/rajitha-00/acbt-blob/refs/heads/main/ACBT-Hero.png"
          }
          subTitle="Stay Close, Go Far!"
          title="Study in Sri Lanka ACBT,"
          title2="Excellence at Home"
          button="Begin Your Journey in Sri Lanka"
        />
        <ImageRightSection
          alt=""
          description="Make London your classroom at Middlesex University. Immerse yourself in the heart of the UK’s academic and cultural life while earning a degree that opens doors worldwide."
          path={
            "https://raw.githubusercontent.com/rajitha-00/acbt-blob/refs/heads/main/ACBT-Hero.png"
          }
          subTitle="Step into the Global Capital of Innovation!"
          title="Study in the UK, "
          title2="Middlesex University, London"
          button="Take the Leap to London!"
        />
        <ImageLeftSection
          alt=""
          description="Earn a degree from Edith Cowan University (ECU), Australia’s leading institution known for innovation and real-world learning. ECU’s campuses in Perth offer a perfect balance of top-tier education and a relaxed lifestyle."
          path={
            "https://raw.githubusercontent.com/rajitha-00/acbt-blob/refs/heads/main/ACBT-Hero.png"
          }
          subTitle="Discover Endless Opportunities Down Under!"
          title="Study in Australia,"
          title2="Edith Cowan University, Perth"
          button="Head to Australia for Your Global Future!"
        />
      </div>
    </div>
  );
};
