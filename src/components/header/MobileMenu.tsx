"use client";
// MobileMenu.tsx
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/constants";

type MobileMenuProps = {
  open: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileMenu = ({
  open,
  setMobileMenuOpen,
}: MobileMenuProps): JSX.Element => {
  return (
    <div>
      <div
        className={`fixed inset-0 ${
          open
            ? "block bg-black/20 duration-300 backdrop-blur-lg"
            : "hidden duration-300"
        }`}
      />
      <div
        className={`bg-white absolute top-0 z-30 h-screen right-0 px-5 py-5 ${
          open
            ? "translate-x-0 duration-300 md:w-1/2 w-full"
            : "translate-x-full duration-300"
        }`}
      >
        <div className="flex flex-col w-full gap-5 pb-4">
          <div className="flex items-center justify-between">
            <Link href="/" passHref>
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src={
                  "https://raw.githubusercontent.com/rajitha-00/acbt-blob/5f8fdf7f01043b2cac2b0c4e82699171d21add50/Logo-Dark.svg"
                }
                alt="Your Company Logo"
                width={200}
                height={200}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-subheading"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    passHref
                    className="-mx-3 block rounded-lg px-3 py-2 font-[600] font-montserrat leading-7 text-experneticColor hover:text-primary-main"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  key={1}
                  href={"/contact"}
                  passHref
                  className="-mx-3 block rounded-lg px-3 py-2 font-[600] font-montserrat leading-7 text-experneticColor hover:text-primary-main"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Enroll Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
