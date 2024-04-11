"use client";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import Link from "next/link";
import { Agenda as AgendaTypes } from "@/types/board";
import { getAllAgendas } from "@/lib/network-data/agenda";
import { toast } from "sonner";
type Props = {};

const notifiedDate = [new Date(2024, 2, 29), new Date(2024, 2, 27)];

export default function Agenda({}: Props) {
  const [pickedDate, setPickedDate] = useState<Date | undefined>(new Date());
  const [agendas, setAgendas] = useState<any>([]);

  useEffect(() => {
    const getAgendas = async () => {
      try {
        const agendas = await getAllAgendas();
        setAgendas(agendas);
        console.log(agendas);
      } catch (error) {
        console.log(error);
        toast.error("Terjadi kesalahan saat mengambil data agenda");
      }
    };
    getAgendas();
  }, []);

  const today = format(new Date(), "d MMMM yyyy", { locale: id });

  return (
    <section className="flex flex-col gap-6 sm:flex-row">
      <div className="boder-[#e8e8e8] basis-[40%] rounded-xl border  bg-white p-4">
        <Calendar
          mode="single"
          selected={pickedDate}
          onSelect={setPickedDate}
          modifiers={{ notified: notifiedDate }}
          modifiersClassNames={{
            notified: "bg-[#429689] hover:!bg-[#429689]/90",
          }}
          custom
        />
      </div>
      <div className="flex  basis-[60%] flex-col  whitespace-nowrap rounded-xl border border-[#e8e8e8] p-4">
        <div className=" md:max-h-[400px] md:overflow-y-auto">
          <div className=" flex items-center justify-between">
            <p className="text-lg  font-bold text-primary lg:text-xl">
              {today}
            </p>
            <Link
              href={"/agenda"}
              className=" cursor-pointer text-lg text-primary text-slate-400"
            >
              Lihat Semua
            </Link>
          </div>

          {agendas.slice(0, 3).map((agenda: any) => (
            <div
              key={agenda.id}
              className="mt-6 flex flex-col rounded-md border border-[#e8e8e8] p-4"
            >
              <p className="text-lg  font-bold text-primary lg:text-xl">
                {agenda.title}
              </p>
              <p className=" pl-6 pt-1 text-slate-500">{agenda.description}</p>
              <p className="mt-4 w-fit rounded-md bg-[#FAE5CB]  px-2 py-0.5 text-[#A53309]">
                {format(parseISO(agenda.deadline), "dd/MM/yyyy")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
