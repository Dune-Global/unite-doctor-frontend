"use client";

import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function GenderDonut() {
  const [options] = useState({
    legend: {
      show: true,
      position: "bottom" as "bottom" | "top" | "right" | "left" | undefined,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
    chart: {
      height: "200", 
      width: "200",  
    },
    labels: ["Male", "Female", "Children", "Attack Helicoptor", "Non-Binary"], 
  });
  const [series, setSeries] = useState([44, 55, 41, 17, 15]);

  return (
    <div className="flex justify-center bg-ugray-0 rounded-md">
      <div className="donut my-6">
        <Chart options={options} series={series} type="donut" />
      </div>
    </div>
  );
}
