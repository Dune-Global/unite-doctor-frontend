"use client";

import React from "react";

interface Report {
  id: string;
  name: string;
  date: string;
}

interface ReportCardProps {
  reports: Report[];
}

const ReportCard: React.FC<ReportCardProps> = ({ reports }) => {
  return (
    <div className="max-w-[450px]">
      {/* static */}
      <div className="flex py-4 px-4 justify-between  items-center bg-ugray-100 font-medium text-ugray-400 rounded-lg">
        <span>Report Name</span>
        <span className="mr-14">Date</span>
      </div>

      {/* dynamic */}
      {reports.map((report) => (
        <div
          key={report.id}
          className="flex py-4 px-4 my-2 justify-between items-center bg-ugray-0 font-medium text-ugray-400 rounded-lg"
        >
          <span>{report.name}</span>
          <span>{report.date}</span>
        </div>
      ))}
    </div>
  );
};

export default ReportCard;
