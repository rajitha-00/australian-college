"use client";
import { followUs, quickLinks, stayConnected } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function FooterMain() {
  return (
    <div className="w-full bg-[#02291EDD] px-10">
      <div className="grid md:grid-cols-5 grid-cols-1 w-full py-8  mx-auto max-w-[1300px] ">
        <div className=" md:col-span-2 grid-cols-1" key={1}>
          <span className="sr-only">Your Company</span>

          <Image
            src={
              "https://raw.githubusercontent.com/rajitha-00/acbt-blob/66fae49efcfa0de794730f83fc42e6cc9fe0f118/Logo-White-v1.svg"
            }
            alt="footerlogo"
            width={200}
            height={200}
            className="md:w-52 w-40"
          />
          <Image
            src={
              "https://raw.githubusercontent.com/rajitha-00/acbt-blob/refs/heads/main/footer%20awrad.png"
            }
            alt="footerlogo"
            width={200}
            height={200}
            className="w-52 mt-16"
          />
        </div>
        <div className="md:col-span-3 grid-cols-1">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-8 sm:mt-4 sm:gap-6 pt-16">
            {/* Quick Links */}
            <div>
              <p className="text-[#00AE48] font-poppins font-[600]">
                Quick Links
              </p>
              <div>
                {quickLinks.map((item) => (
                  <div className="py-1" key={item.name}>
                    <Link
                      href={item.url}
                      className="text-white font-poppins py-1"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Stay Connected */}
            <div>
              <p className="text-[#00AE48] font-poppins font-[600]">
                Stay Connected
              </p>
              <div>
                {stayConnected.map((item) => (
                  <div className="py-1" key={item.name}>
                    <Link
                      href={item.url}
                      className="text-white font-poppins hover:text-[#00AE48] py-1"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <p className="text-[#00AE48] font-poppins font-[600]">
                Follow Us
              </p>
              <ul>
                {followUs.map((item) => (
                  <li className="py-2" key={item.name}>
                    <Link href={item.url} target="_blank">
                      <div className="row flex items-center hover:text-[#00AE48]">
                        <div className="col">
                          <Image
                            alt={item.name}
                            className="text-white hover:text-[#00AE48]"
                            src={item.iconSrc}
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="col pl-2">
                          <p className="text-white hover:text-[#00AE48] font-poppins">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center border-t-[0.5px] border-gray-600 py-2 justify-center">
        <div className="">
          <p
            key={20}
            className="text-white font-poppins px-10 text-sm text-center"
          >
            © 2024 ACBT | Empowering Minds Globally
            <br />
            Part of the Navitas Group, offering world-class education in Sri
            Lanka and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}
