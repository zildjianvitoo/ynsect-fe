import React, { useEffect, useState } from "react";

import AgendaCard from "./AgendaCard";
import { HiPlus } from "react-icons/hi";
import { useSortable } from "@dnd-kit/sortable";
import { UniqueIdentifier } from "@dnd-kit/core";
import { Agenda } from "@prisma/client";
import { CSS } from "@dnd-kit/utilities";
type Props = {
  agendaCategories?: {
    id: string;
    name: string;
  }[];
  agendas: Agenda[];
};

export default function Preparation({ agendaCategories, agendas }: Props) {
  const agendaPreparation = agendaCategories?.find(
    (agenda) => agenda.name === "PREPARATION",
  );

  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: agendaPreparation?.id as UniqueIdentifier,
      data: {
        type: "column",
        agendaCategories,
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative z-20 flex flex-grow  flex-col gap-4 rounded-xl bg-primary p-4 text-white"
    >
      <div
        className="flex items-center justify-between"
        {...attributes}
        {...listeners}
      >
        <h3 className="text-xl font-bold md:text-2xl">Persiapan</h3>
        <HiPlus className="cursor-pointer  text-lg " />
      </div>
      {agendas.map((agenda) => (
        <AgendaCard key={agenda.id} />
      ))}

      {/* <AgendaCard /> */}
    </div>
  );
}
