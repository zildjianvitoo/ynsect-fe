// import useDemoConfig from "../useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";
import useChartConfig from "@/hooks/useDemoConfig";

type Amount = {
  weight: number;
  date: string;
};

type Series = {
  label: string;
  data: Amount[];
};

const data: Series[] = [
  {
    label: "Series 1",
    data: [
      {
        weight: 20,
        date: "01",
      },
    ],
  },
  {
    label: "Series 2",
    data: [
      {
        weight: 40,
        date: "02",
      },
    ],
  },
];

type Props = {};

export default function Bar({}: Props) {
  const data: Series[] = [
    {
      label: "Series 1",
      data: [
        {
          weight: 20,
          date: "01",
        },
        {
          weight: 40,
          date: "02",
        },
        {
          weight: 20,
          date: "03",
        },
        {
          weight: 45,
          date: "04",
        },
        {
          weight: 50,
          date: "05",
        },
        {
          weight: 15,
          date: "06",
        },
        {
          weight: 25,
          date: "07",
        },
        {
          weight: 30,
          date: "08",
        },
        {
          weight: 55,
          date: "09",
        },
        {
          weight: 35,
          date: "10",
        },
      ],
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
          Total Limbah
        </h3>
        <h2 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl lg:text-[40px]/normal">
          52 Kg
        </h2>
      </div>
      <div className=" h-[300px] w-[900px] overflow-x-auto whitespace-nowrap xl:h-[350px] xl:w-[1100px] ">
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            initialWidth: 900,
            initialHeight: 300,
            defaultColors: ["#15514D", "#429689"],
          }}
          className="w-full overflow-x-auto whitespace-nowrap"
        />
      </div>
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
