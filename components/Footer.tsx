import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCall, IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer id="footer" className="container bottom-0 left-0 mt-16  border-t">
      <div className="bg-white py-12 lg:py-16">
        <div className="relative mx-auto flex w-full flex-col gap-6  ">
          <div className="flex flex-col  gap-10 text-sm md:gap-20 lg:flex-row ">
            <div className="flex flex-col gap-3">
              <figure>
                <Image
                  src={"/images/logo-ynsect-footer.svg"}
                  alt="Logo Ynsect"
                  width={130}
                  height={80}
                  // className="w-[175px] sm:w-[310px]"
                />
              </figure>
              <div className="flex flex-col gap-1 text-primary">
                <h4 className="text-lg font-bold">2P8J+2VQ</h4>
                <p className="text-lg leading-relaxed tracking-wide lg:w-[60%]">
                  Jl. Srijaya Negara, Bukit Besar, Kec. Ilir Bar. I, Kota
                  Palembang, Sumatera Selatan 30128
                </p>
              </div>
              <div className="mt-2  flex gap-6 text-primary">
                <IoCall className="size-7 cursor-pointer transition-all hover:-translate-y-1" />
                <RiInstagramFill className="size-7 cursor-pointer transition-all hover:-translate-y-1" />
                <IoMail className="size-7 cursor-pointer transition-all hover:-translate-y-1" />
              </div>
            </div>

            <div className="flex w-full flex-col gap-8 tracking-wide max-lg:justify-between  md:flex-row lg:gap-14 xl:gap-28 ">
              <div className="flex flex-col gap-3 md:gap-6">
                <h4 className="w-fit text-lg font-bold  text-primary lg:text-xl">
                  Product
                </h4>
                <ul className="flex flex-col gap-3 text-base text-slate-500 md:gap-4 md:text-lg">
                  <li>
                    <Link
                      href={"/products/"}
                      className="duration-200 hover:text-primary"
                    >
                      Larva BSF Kering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/products/"}
                      className="duration-200 hover:text-primary"
                    >
                      Protein BSF Larva
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/products/"}
                      className="duration-200 hover:text-primary"
                    >
                      Minyak BSF Larva
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/products/"}
                      className="duration-200 hover:text-primary"
                    >
                      BSF Larva Hidup
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/products/"}
                      className="duration-200 hover:text-primary"
                    >
                      Pelet BSF
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/products/"}
                      className="duration-200 hover:text-primary"
                    >
                      Pupuk BSF
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h4 className="w-fit text-lg font-bold  text-primary lg:text-xl">
                  Services
                </h4>
                <ul className="flex flex-col gap-3 text-base text-slate-500 md:gap-4 md:text-lg">
                  <li>
                    <Link
                      href={"/services/biobox"}
                      className="duration-200 hover:text-primary"
                    >
                      Biobox
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/waste-management"}
                      className="duration-200 hover:text-primary"
                    >
                      Waste Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/setor-sampah"}
                      className="duration-200 hover:text-primary"
                    >
                      Setor Sampah
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/forum"}
                      className="duration-200 hover:text-primary"
                    >
                      Forum
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h4 className="w-fit text-lg font-bold  text-primary lg:text-xl">
                  About Us
                </h4>
                <ul className="flex flex-col gap-3 text-base text-slate-500 md:gap-4 md:text-lg">
                  <li>
                    <Link
                      href={"/#CTA"}
                      className="duration-200 hover:text-primary"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/#feature"}
                      className="duration-200 hover:text-primary"
                    >
                      Benefits
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
