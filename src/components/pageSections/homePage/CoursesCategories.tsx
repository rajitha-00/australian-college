"use client";
import { courses } from "@/constants";
import { Card } from "./Card";
import { Fade } from "react-awesome-reveal";

export const CoursesCategories = () => {
  return (
    <div className="w-full bg-primary-main min-h-10  p-5 gap-6">
      <div className="px-5 mx-auto max-w-[1300px] lg:px-0 flex flex-wrap justify-center">
        {courses.map((course) => (
          <div className=" p-2" key={course.name}>
            <Fade triggerOnce direction="up">
              <Card name={course.name} url={course.url} alt={course.alt} />
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};
