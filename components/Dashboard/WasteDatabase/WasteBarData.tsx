"use client";
import React, { useState } from "react";
import Bar from "../Dashboard/Bar";
import CardStatistics from "../Dashboard/CardStatistics";

type Props = {};

const dummyData = [
  {
    title: "Limbah maggot",
    rangeMonths: "Januari - Maret 2024",
    weight: 52,
  },
  {
    title: "Sayuran",
    rangeMonths: "Januari - Maret 2024",
    weight: 28,
  },
  {
    title: "Buahan",
    rangeMonths: "Januari - Maret 2024",
    weight: 32,
  },
  {
    title: "Dedak",
    rangeMonths: "Januari - Maret 2024",
    weight: 10,
  },
  {
    title: "GDM Supply",
    rangeMonths: "Januari - Maret 2024",
    weight: 4,
  },
  {
    title: "Biobox",
    rangeMonths: "Januari - Maret 2024",
    weight: 12,
  },
];

export default function WasteBarData({}: Props) {
  const [activeCardStats, setActiveCardStats] = useState("Limbah maggot");

  return (
    <section className="flex flex-col gap-6">
      <Bar
        title={activeCardStats}
        weight={
          dummyData.filter((item) => item.title === activeCardStats)[0].weight
        }
      />
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
    </section>
  );
}
