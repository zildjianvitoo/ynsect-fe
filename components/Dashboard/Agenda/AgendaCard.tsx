import Image from "next/image";
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineArrowForwardIos } from "react-icons/md";
type Props = {};

export default function AgendaCard({}: Props) {
  return (
    <div className="flex cursor-grab flex-col gap-4 rounded-md bg-white p-4">
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
  );
}
