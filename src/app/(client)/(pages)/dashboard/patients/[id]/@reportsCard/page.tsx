"use client";

import ReportCard from "@/components/patient-details/ReportCard";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getReportsByPatientIdActionHandler } from "@/actionLayer/patients/patientsAction";
import { IDoctorPatientDetails } from "@/types/doctor-patient-details";
import { getDoctorPatientDetails } from "@/api/patients/patientsAPI";

export default function Page() {
  interface Params {
    id: string;
  }

  const params = useParams();

  const [reportsList, setReportsList] = useState([]);
  const [doctorPatientDetails, setDoctorPatientDetails] =
    useState<IDoctorPatientDetails | null>(null);

  // useEffect(() => {
  //   if (typeof params.id === "string") {
  //     const res = getReportsByPatientIdActionHandler(params.id).then(
  //       (res: any) => {
  //         setReportsList(res.data.reports);
  //         console.log(reportsList);
  //       }
  //     );
  //   }
  // }, []);

  useEffect(() => {
    const getDoctorPatientDetailsBySessionIdActionHandler = (
      patientSessionId: string
    ) => {
      getDoctorPatientDetails(patientSessionId)
        .then((res) => {
          console.log("\n\n\nDoctor patient details res", res.data);
          setDoctorPatientDetails(res.data);
          console.log("\n\n\nDoctor patient details", doctorPatientDetails);
          if (res.data) {
            getReportDetailsActionHandler(res.data.patient);
          }
          // setIsDoctorPatientLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching doctor patient details", error);
          // setIsDoctorPatientLoading(false);
        });
    };

    const getReportDetailsActionHandler = (patientId: string) => {
      getReportsByPatientIdActionHandler(patientId)
        .then((res) => {
          setReportsList(res.data.reports);
          console.log("\n\n\nReports details", reportsList);
          // setIsDoctorDetailsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching report details", error);
          // setIsDoctorDetailsLoading(false);
        });
    };

    if (Array.isArray(params.id)) {
      getDoctorPatientDetailsBySessionIdActionHandler(params.id[0]);
    } else {
      getDoctorPatientDetailsBySessionIdActionHandler(params.id);
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
