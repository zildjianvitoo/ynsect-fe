"use client";
import React, { useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { DayClickEventHandler } from "react-day-picker";
import { format } from "date-fns";
import { id } from "date-fns/locale";
type Props = {};

const notifiedDate = [new Date(2024, 2, 29), new Date(2024, 2, 27)];

export default function Agenda({}: Props) {
  const [pickedDate, setPickedDate] = React.useState<Date | undefined>(
    new Date(),
  );

  const today = format(new Date(), "d MMMM yyyy", { locale: id });

  useEffect(() => {}, []);

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
        />
      </div>
      <div className="flex  basis-[60%] flex-col  whitespace-nowrap rounded-xl border border-[#e8e8e8] p-4">
        <div className=" md:max-h-[400px] md:overflow-y-auto">
          <div className=" flex items-center justify-between">
            <p className="text-lg  font-bold text-primary lg:text-xl">
              {today}
            </p>
            <p className=" cursor-pointer text-lg text-primary text-slate-400">
              Lihat Semua
            </p>
          </div>
          <div className="mt-6 flex flex-col rounded-md border border-[#e8e8e8] p-4">
            <p className="text-lg  font-bold text-primary lg:text-xl">
              Inokulasi Telur
            </p>
            <ul className="list-disc pl-6 pt-1 text-slate-500">
              <li>Penempatan telur</li>
            </ul>
            <p className="mt-4 w-fit rounded-md bg-[#CFF6FB] px-2 py-0.5 text-[#0070AD]">
              02/03/2024
            </p>
          </div>
          <div className="mt-6 flex flex-col rounded-md border border-[#e8e8e8] p-4">
            <p className="text-lg  font-bold text-primary lg:text-xl">
              Pemeliharaan
            </p>
            <ul className="list-disc pl-6 pt-1 text-slate-500">
              <li>Pemberian pakan harian</li>
            </ul>
            <p className="mt-4 w-fit rounded-md bg-[#CFF6FB] px-2 py-0.5 text-[#0070AD]">
              02/03/2024
            </p>
          </div>
          <div className="mt-6 flex flex-col rounded-md border border-[#e8e8e8] p-4">
            <p className="text-lg  font-bold text-primary lg:text-xl">
              Pemeliharaan
            </p>
            <ul className="list-disc pl-6 pt-1 text-slate-500">
              <li>Pemberian pakan harian</li>
            </ul>
            <p className="mt-4 w-fit rounded-md bg-[#CFF6FB] px-2 py-0.5 text-[#0070AD]">
              02/03/2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
