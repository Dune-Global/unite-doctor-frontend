"use client";

import ReportCard from "@/components/patient-details/ReportCard";
import React from "react";

export default function Page() {
  const reports = [
    { id: "1", name: "Report 1", date: "2024-03-17" },
    { id: "2", name: "Report 2", date: "2024-03-18" },
    { id: "3", name: "Report 3", date: "2024-03-19" },
  ];

  return (
    <div className="my-6 flex flex-col gap-3">
      <h1 className="font-semibold text-xl text-ugray-600 mb-2">Reports</h1>
      <ReportCard reports={reports} />
    </div>
  );
}
