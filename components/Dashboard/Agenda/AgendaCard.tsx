"use client";
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
      onClick={() => console.log("aaa")}
      {...props}
    >
      {agenda.image && (
        <figure className="relative h-24 w-full items-stretch">
          <Image
            src={"/images/setor-sampah.jpg"}
            alt="Setor Sampah"
            fill
            className="rounded-md object-cover"
          />
        </figure>
      )}
      <div>
        <h4 className="text-xl font-bold text-primary">{agenda.title}</h4>
        <p className="text-[#777]">{agenda.description}aa</p>
      </div>

      <div className="flex items-center justify-between ">
        <div className="w-fit rounded-sm bg-[#FAE5CB] px-2 py-1 text-[#A53309]">
          <p className="font-medium">02/03/2024</p>
        </div>
        <FaRegEdit className="cursor-pointer text-2xl text-slate-500" />
      </div>
    </div>
  );
}
