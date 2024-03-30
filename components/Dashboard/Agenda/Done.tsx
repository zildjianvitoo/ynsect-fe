import { MdOutlineArrowForwardIos } from "react-icons/md";
import AgendaCard from "./AgendaCard";
import { HiPlus } from "react-icons/hi";
import { Agenda } from "@prisma/client";

type Props = {
  agendaCategories?: {
    id: string;
    name: string;
  }[];
  agendas: Agenda[];
};

export default function Done({}: Props) {
  return (
    <div className="flex  flex-grow flex-col gap-4 rounded-xl bg-primary p-4 text-white ">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold md:text-2xl">Selesai</h3>
        <HiPlus className="cursor-pointer  text-lg " />
      </div>
      <AgendaCard />
      <AgendaCard />
    </div>
  );
}
