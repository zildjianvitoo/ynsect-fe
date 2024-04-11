"use client";

import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { addDays, format } from "date-fns";
import { id } from "date-fns/locale/id";
import { Input } from "@/components/ui/input";

type Props = {};

export default function ShipmentBox({}: Props) {
  const [isEdit, setEdit] = useState(false);
  const [formValue, setFormValue] = useState("Jalan Sudarsono No. 1663");

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
          {isEdit ? (
            <Input
              className="w-full rounded-md  border bg-transparent  py-2 text-base placeholder:text-base focus:outline-primary focus:ring-primary"
              placeholder="ex: Jalan sudarsono no 1663"
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  const { value } = e.target as HTMLInputElement;
                  setEdit(false);
                  setFormValue(value);
                }
              }}
              onBlur={() => setFormValue((prev) => prev)}
            />
          ) : (
            <h3 className=" font-bold text-[#15514D] ">{formValue}</h3>
          )}
          <CiEdit
            size={18}
            className=" cursor-pointer"
            onClick={() => setEdit(true)}
          />
        </div>
      </div>
    </div>
  );
}
