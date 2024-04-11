"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import AgendaDialog from "./AgendaDialog";
import { Agenda } from "@/types/board";
import { parseISO, format } from "date-fns";

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
  const date = parseISO(agenda.deadline);
  const formattedDate = format(date, "dd/MM/yyyy");
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
            src={agenda.image}
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
          <p className="font-medium">{formattedDate}</p>
        </div>
        <AgendaDialog status={agenda.status} initialData={agenda} />
      </div>
    </div>
  );
}
