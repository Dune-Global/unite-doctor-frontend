"use client";

import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { getDashboardData } from "@/api/dashboard/dashboardapi";

export default function AgeDistribution() {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
      fontFamily: "Inter",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [],
    },
  ]);

  useEffect(() => {
    getDashboardData().then((res: any) => {
      const ageData = res.data.data.age;
      const categories = ageData.map((item: any) => item.type);
      const data = ageData.map((item: any) => item.count);

      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories: categories,
        },
      }));

      setSeries([
        {
          name: "series-1",
          data: data,
        },
      ]);
    });
  }, []);

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
