import WasteBarData from "@/components/Dashboard/WasteDatabase/WasteBarData";
import React from "react";

type Props = {};

export default function WasteDatabasePage({}: Props) {
  return (
    <div className="flex flex-col p-6">
      <WasteBarData />
    </div>
  );
}
