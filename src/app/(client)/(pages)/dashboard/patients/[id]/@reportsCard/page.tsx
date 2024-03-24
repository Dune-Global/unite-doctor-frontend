"use client";

import ReportCard from "@/components/patient-details/ReportCard";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getReportsByPatientIdActionHandler } from "@/actionLayer/patients/patientsAction";

export default function Page() {
  interface Params {
    id: string;
  }

  const params = useParams();

  const [reportsList, setReportsList] = useState([]);

  useEffect(() => {
    if (typeof params.id === "string") {
      const res = getReportsByPatientIdActionHandler(params.id).then(
        (res: any) => {
          setReportsList(res.data.reports);
          console.log(reportsList);
        }
      );
    }
  }, []);

  return (
    <div className="my-6 flex flex-col gap-3">
      <h1 className="font-semibold text-xl text-ugray-600 mb-2">Reports</h1>
      <div>
        {reportsList.length > 0 ? (
          reportsList.map((report: any) => (
            <ReportCard
              key={report._id}
              reportId={report._id}
              reportName={report.reportType}
              date={report.tookDate}
            />
          ))
        ) : (
          <div className="text-center text-ugray-400 my-10">
            No Reports available
          </div>
        )}
      </div>
    </div>
  );
}
