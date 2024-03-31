import Image from "next/image";
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { Agenda } from "@prisma/client";
import { FaRegEdit } from "react-icons/fa";
import { cn } from "@/lib/utils";

type Props = {
  agenda: Agenda;
  isDragging: boolean;
  innerRef: any;
};

export default function AgendaCard({
  agenda,
  isDragging,
  innerRef,
  ...props
}: Props) {
  return (
    <div
      ref={innerRef}
      className={cn(
        "relative z-20 flex cursor-grab flex-col gap-4 rounded-md bg-white p-4 ",
        {
          "opacity-60": isDragging,
        },
      )}
      {...props}
    >
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
      <div className="flex justify-between">
        <div className="w-fit rounded-sm bg-[#CFF6FB] px-2 py-1 text-[#0070AD]">
          <p className="font-medium">02/03/2024</p>
        </div>
        <FaRegEdit />
      </div>
    </div>
  );
}
