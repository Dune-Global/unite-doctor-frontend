"use client";

import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { getDashboardData } from "@/api/dashboard/dashboardapi"

export default function GenderDonut() {
  const [options, setOptions] = useState({
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
    labels: [],
  });

  const [series, setSeries] = useState([]);

  useEffect(() => {
    getDashboardData().then((res: any) => {
      const genderData = res.data.data.gender;
      const labels = genderData.map((item: any) => item.type);
      const data = genderData.map((item: any) => item.count);

      setOptions((prevOptions) => ({
        ...prevOptions,
        labels: labels,
      }));

      setSeries(data);
    });
  }, []);

  return (
    <div className="flex justify-center bg-ugray-0 rounded-md">
      <div className="donut my-6">
        <Chart options={options} series={series} type="donut" />
      </div>
    </div>
  );
}
