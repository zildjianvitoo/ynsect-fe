"use client";
import React, { useState } from "react";
import CardStatistics from "./CardStatistics";
import Chart from "./Bar";
import Bar from "./Bar";
import { Calendar } from "@/components/ui/calendar";

type Props = {};

const dummyData = [
  {
    title: "Total Limbah",
    rangeMonths: "Januari - Maret 2024",
    weight: 32,
  },
  {
    title: "Total Larval Hidup",
    rangeMonths: "Januari - Maret 2024",
    weight: 28,
  },
  {
    title: "Stok Larva",
    rangeMonths: "Januari - Maret 2024",
    weight: 32,
  },
];

export default function CardStatSelection({}: Props) {
  const [activeCardStats, setActiveCardStats] = useState("Total Limbah");

  return (
    <section id="card-stat-selection" className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyData.map((item, index) => (
          <CardStatistics
            key={index}
            title={item.title}
            rangeMonth={item.rangeMonths}
            weight={item.weight}
            activeCardStats={activeCardStats}
            setActiveCardStats={setActiveCardStats}
          />
        ))}
      </div>
      <Bar />
    </section>
  );
}
