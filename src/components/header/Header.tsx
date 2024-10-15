"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRightIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { MobileMenu } from "./MobileMenu";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <div className={"fixed bg-white w-full z-50 top-0 "}>
      <header
        className={
          "fixed w-full md:px-8 border-b-2 border-accentColor inset-x-0 top-0 z-50 bg-white px-2   duration-300 "
        }
      >
        <nav
          className="flex items-center justify-between  p-2 py-2  mx-auto max-w-[1300px]"
          aria-label="Global"
        >
          <div className="flex items-center gap-16">
            <div className="flex lg:flex-1">
              <Link href="/">
                <span className="sr-only">ACBT</span>
                <Image
                  className=" cursor-pointer"
                  width={150}
                  height={200}
                  src={
                    "https://raw.githubusercontent.com/rajitha-00/acbt-blob/5f8fdf7f01043b2cac2b0c4e82699171d21add50/Logo-Dark.svg"
                  }
                  alt="ACBT Logo"
                />
              </Link>
            </div>

            <div className={`hidden lg:flex lg:gap-x-12 `}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  passHref
                  className={`text-md font-[600] font-montserrat leading-6 "text-white border-white"
                     ${
                       pathname.includes(item.name.toLowerCase()) ||
                       (pathname === "/" && item.index === "1")
                         ? " text-primary-main "
                         : "  text-subheading"
                     }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex lg:hidden relative z-30 ">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className={
                  "text-lg font-[600] w-6 h-6 font-montserrat leading-6 text-experneticColor "
                }
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/contact" onClick={() => {}}>
              <div
                className={`inline-flex items-center  flex-none rounded-md px-3 py-2 text-md font-[600] font-montserrat ${"bg-accentColor text-primary-main  "} `}
              >
                Enroll Today
                <ArrowRightIcon
                  className={`ml-1.5 -mr-0.5 h-5 w-5 lg:font-[500] text-md font-montserrat  text-primary-main`}
                  aria-hidden="true"
                />
              </div>
            </Link>
          </div>
        </nav>
        <MobileMenu
          open={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          key={1}
        />
      </header>
    </div>
  );
}
