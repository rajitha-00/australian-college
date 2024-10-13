// app/not-found.tsx
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative z-10 px-5 mx-auto max-w-[1300px] lg:px-0 flex items-center justify-center md:justify-normal flex-col min-h-[100vh]">
      <div className="px-5 space-y-5 flex items-center justify-center flex-col pt:36 md:pt-44">
        <h1
          className="text-7xl text-center font-semibold bg-gradient-to-r from-[#007354] via-[#007756] to-[#00d79c] bg-clip-text text-transparent"
          style={{ lineHeight: "1.2" }}
        >
          404
        </h1>
        <h2
          className="text-lg md:text-3xl text-subheading text-center font-semibold"
          style={{ lineHeight: "1.2" }}
        >
          Page Not Found <br /> (Might be Still Development)
        </h2>
        <p className="mb-4 text-[16px] text-center font-light text-gray-500 dark:text-gray-400">
          Sorry, we can&apos;t find that page. You&apos;ll find lots to explore
          on the home page.
        </p>
        <Link href="/">
          <div
            className={`inline-flex items-center  flex-none rounded-md px-3 py-2 text-md font-[600] font-montserrat ${"bg-accentColor text-primary-main  "} `}
          >
            Back to Homepage
            <ArrowRightIcon
              className={`ml-1.5 -mr-0.5 h-5 w-5 lg:font-[500] text-md font-montserrat  text-primary-main`}
              aria-hidden="true"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
