import Image from "next/image";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { HiOutlineMenu } from "react-icons/hi";

type Props = {};

export default function Preparation({}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-primary p-4 text-white">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold md:text-2xl">Persiapan</h3>
        <MdOutlineArrowForwardIos className="text-sm" />
      </div>
      <div className="flex flex-col gap-4 rounded-md bg-white p-4">
        <figure className="relative h-24 w-full items-stretch">
          <Image
            src={"/images/setor-sampah.jpg"}
            alt="Setor Sampah"
            fill
            className="rounded-md object-cover"
          />
        </figure>
        <div>
          <h4 className="text-xl font-bold text-primary">Media Tumbuh</h4>
          <ul className="ml-6 list-disc text-[#777]">
            <li>Memberikan kompos organik</li>
            <li>Memberikan kompos organik</li>
            <li>Memberikan kompos organik</li>
          </ul>
        </div>
        <div className="flex items-center text-[#777]">
          <HiOutlineMenu size={24} />
          <HiOutlineClipboardDocumentList className="ml-6 " size={24} />

          <p className="ml-1">0/3</p>
        </div>
        <div className="w-fit rounded-sm bg-[#CFF6FB] px-2 py-1 text-[#0070AD]">
          <p className="font-medium">02/03/2024</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-md bg-white p-4">
        <figure className="relative h-24 w-full items-stretch">
          <Image
            src={"/images/setor-sampah.jpg"}
            alt="Setor Sampah"
            fill
            className="rounded-md object-cover"
          />
        </figure>
        <div>
          <h4 className="text-xl font-bold text-primary">Media Tumbuh</h4>
          <ul className="ml-6 list-disc text-[#777]">
            <li>Memberikan kompos organik</li>
            <li>Memberikan kompos organik</li>
            <li>Memberikan kompos organik</li>
          </ul>
        </div>
        <div className="flex items-center text-[#777]">
          <HiOutlineMenu size={24} />
          <HiOutlineClipboardDocumentList className="ml-6 " size={24} />

          <p className="ml-1">0/3</p>
        </div>
        <div className="w-fit rounded-sm bg-[#CFF6FB] px-2 py-1 text-[#0070AD]">
          <p className="font-medium">02/03/2024</p>
        </div>
      </div>
    </div>
  );
}
