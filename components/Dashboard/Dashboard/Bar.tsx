"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

type Amount = {
  weight: number;
  date: string;
};

type Series = {
  label: string;
  data: Amount[];
};

type Props = {
  title: string;
  weight: number;
};

export default function Bar({ title, weight }: Props) {
  const data: Series[] = [
    {
      label: "Series 1",
      data: Array.from({ length: 10 }, (_, index) => ({
        weight: Math.floor(Math.random() * 100) + 1,
        date: (index + 1).toString().padStart(2, "0"),
      })),
    },
    {
      label: "Series 2",
      data: [
        { weight: 20, date: "01" },
        {
          weight: 40,
          date: "02",
        },
        {
          weight: 35,
          date: "03",
        },
        {
          weight: 25,
          date: "04",
        },
        {
          weight: 50,
          date: "05",
        },
        {
          weight: 10,
          date: "06",
        },
        {
          weight: 25,
          date: "07",
        },
        {
          weight: 45,
          date: "08",
        },
        {
          weight: 65,
          date: "09",
        },
        {
          weight: 75,
          date: "10",
        },
      ],
    },
  ];

  const primaryAxis = React.useMemo<AxisOptions<Amount>>(
    () => ({
      getValue: (datum) => datum.date,
      elementType: "bar",
    }),
    [],
  );

  const secondaryAxes = React.useMemo<AxisOptions<Amount>[]>(
    () => [
      {
        getValue: (datum) => datum.weight,
      },
    ],
    [],
  );

  return (
    <div className="flex flex-col gap-2 rounded-xl  border border-[#E8E8E8] bg-white p-4">
      <div className="flex flex-col">
        <h3 className="text-xl font-medium text-slate-500 md:text-2xl">
          {title}
        </h3>
        <h2 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl lg:text-[40px]/normal">
          {weight} Kg
        </h2>
      </div>

      <ScrollArea className="h-[200px] w-[400px] whitespace-nowrap  sm:h-[300px] sm:w-[500px] lg:w-[900px] xl:h-[350px] xl:w-[1100px]">
        <div className="flex h-[200px] min-w-max sm:h-[300px]">
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes,
              initialWidth: 900,
              initialHeight: 300,
              defaultColors: ["#15514D", "#429689"],
            }}
          />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className=" flex  gap-x-5 gap-y-3  md:items-center">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-primary" />
          <p className=" text-slate-800">Last 6 days</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-[#429689]" />
          <p className=" text-slate-800">Last Week</p>
        </div>
      </div>
    </div>
  );
}
