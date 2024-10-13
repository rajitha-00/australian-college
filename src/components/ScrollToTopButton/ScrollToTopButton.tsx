"use client";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export const ScrollToTopButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100); // Adjust this value based on when you want the button to appear
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      className={`fixed md:bottom-12 bottom-16 right-4 p-2 bg-primary-main z-50 text-white rounded-full border-white border-[1px] ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      <ChevronDoubleUpIcon
        className="h-5 w-5 text-white  lg:font-500 font-poppins"
        aria-hidden="true"
      />
    </button>
  );
};
