import React from "react";
import { CiEdit } from "react-icons/ci";

type Props = {};

export default function ShipmentBox({}: Props) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-slate-300 p-6">
      <h3 className=" text-xl font-bold lg:text-2xl">Pengiriman</h3>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-slate-500">Estimasi tiba</p>
        <h3 className=" text-xl font-bold lg:text-2xl">24 Maret 2024</h3>
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
