"use client";

import { useState } from "react";
import Chart from "react-apexcharts";

export default function AgeDistribution() {
  const [options] = useState({
    chart: {
      id: "basic-bar",
      fontFamily: "Inter",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });

  const [series] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 80],
    },
  ]);

  return (
    <div className="app bg-ugray-0 rounded-lg mt-6">
      <div className="row">
        <div className="mixed-chart !text-xs">
          <Chart options={options} series={series} type="area" />
        </div>
      </div>
    </div>
  );
}
