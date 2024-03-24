import Agenda from "@/components/Dashboard/Dashboard/Agenda";
import CardStatSelection from "@/components/Dashboard/Dashboard/CardStatSelection";

import React from "react";

type Props = {};

export default function DashboardPage({}: Props) {
  return (
    <div className="flex flex-col gap-6 p-6">
      <CardStatSelection />
      <Agenda />
    </div>
  );
}
