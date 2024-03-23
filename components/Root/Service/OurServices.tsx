import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

type Props = {};

export default function OurServices() {
  return (
    <section className="container ">
      <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
        <div className="flex flex-col gap-1">
          <p className=" text-lg text-slate-500 md:text-xl">
            Present at any time
          </p>
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Our Services
          </h1>
        </div>
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
          <div className="relative h-80 overflow-hidden rounded-md ">
            <Image
              src="/images/biobox.jpg"
              alt="Biobox"
              fill
              className="object-cover"
            />
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/75 " />
            <div className="relative z-20 flex h-full flex-col justify-end gap-2  p-4 text-white lg:p-6">
              <h3 className="text-2xl/snug font-bold tracking-wide text-secondary  md:text-4xl/snug">
                Biobox
              </h3>
              <p className=" text-slate-100 sm:text-lg md:text-xl">
                Olah sampah dari rumah dengan Biobox
              </p>
              <Link href={"/services/biobox"}>
                <Button className=" flex h-11 w-fit items-center gap-1 text-lg">
                  Learn more <MdOutlineArrowForwardIos className="mt-[1px]" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-80 overflow-hidden rounded-md ">
            <Image
              src="/images/waste-management.jpg"
              alt="Waste Management"
              fill
              className="object-cover object-left-top"
            />
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/75 " />
            <div className="relative z-20 flex h-full flex-col justify-end gap-2  p-4 text-white  lg:p-6">
              <h3 className="text-2xl/snug font-bold tracking-wide text-secondary  md:text-4xl/snug">
                Waste Management
              </h3>
              <p className=" text-slate-100 sm:text-lg md:text-xl">
                Kami hadir siap mengolah limbah organik anda
              </p>
              <Link href={"/services/waste-management"}>
                <Button className="flex h-11 w-fit items-center gap-1 text-lg">
                  Learn more <MdOutlineArrowForwardIos className="mt-[1px]" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-80 overflow-hidden rounded-md ">
            <Image
              src="/images/setor-sampah.jpeg"
              alt="Setor Sampah"
              fill
              className="object-cover"
            />
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/75 " />
            <div className="relative z-20 flex h-full flex-col justify-end gap-2  p-4 text-white  lg:p-6">
              <h3 className="text-2xl/snug font-bold tracking-wide text-secondary  md:text-4xl/snug">
                Setor Sampah
              </h3>
              <p className=" text-slate-100 sm:text-lg md:text-xl">
                Hubungi kami dan petugas akan tiba dirumahmu segera
              </p>
              <Link href={"/services/setor-sampah"}>
                <Button className="flex h-11 w-fit items-center gap-1 text-lg">
                  Learn more <MdOutlineArrowForwardIos className="mt-[1px]" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
