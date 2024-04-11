"use client";

import React from "react";
import { CiEdit } from "react-icons/ci";
import { addDays, format } from "date-fns";
import { id } from "date-fns/locale/id";

type Props = {};

export default function ShipmentBox({}: Props) {
  const today = new Date();

  const threeDaysLater = addDays(today, 3);
  const formattedDate = format(threeDaysLater, "dd MMMM yyyy", {
    locale: id,
  });

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-slate-300 p-6">
      <h3 className=" text-xl font-bold lg:text-2xl">Pengiriman</h3>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-slate-500">Estimasi tiba</p>
        <h3 className=" text-xl font-bold lg:text-2xl">{formattedDate}</h3>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-slate-500">Dikirim ke</p>
        <div className="flex items-center gap-2">
          <h3 className=" font-bold text-[#15514D] ">
            Jalan Sudarsono No. 1663
          </h3>
          <CiEdit size={18} className=" cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
