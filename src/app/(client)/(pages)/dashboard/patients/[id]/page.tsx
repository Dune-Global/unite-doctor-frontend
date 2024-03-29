"use client";

import HistoryAccordion from "@/components/patient-details/HistoryAccordion";
import PatientCard from "@/components/patient-details/PatientCard";
import Progress from "@/components/patient-details/PatientProgress";
import ReportCard from "@/components/patient-details/ReportCard";
import { getPatientHistory } from "@/data/mock/patient-history";
import { PatientHistoryList } from "@/types/patient-history";
import React, { useEffect, useState } from "react";

const PatientDetails = () => {
  const reports = [
    { id: "1", name: "Report 1", date: "2024-03-17" },
    { id: "2", name: "Report 2", date: "2024-03-18" },
    { id: "3", name: "Report 3", date: "2024-03-19" },
  ];

  const [patientHistory, setPatientHistory] = useState<PatientHistoryList[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const historyData = await getPatientHistory();
        setPatientHistory(historyData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching patient history:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (

    <div className="">
      {/* <> */}
      {/* <div className="mt-10 lg:mt-0"> */}
      {/* Progress */}
      {/* <div className="flex flex-col items-center">

              <h1 className="md:mt-8 font-semibold text-2xl text-ugray-600 self-center lg:self-start ">
                Patient Details
              </h1>
              <div className="mb-14 mt-6 max-w-[960px] w-full px-10 xl:px-2">
                <Progress currentStep={2} />
              </div>

            </div> */}

      {/* Accordion */}
      {/* <div className="my-16">

              {patientHistory.map((historyItem, index) => (
                <HistoryAccordion
                  key={historyItem.id}
                  {...historyItem}
                  isLastItem={index === patientHistory.length - 1} // Pass true for the last item
                />
              ))}

            </div> */}
      {/* </div> */}

      {/* <div className="min-w-96 mt-4 lg:mt-20 space-y-10"> */}
      {/* Patient card */}
      {/* <div>

              <PatientCard
                image="https://randomuser.me/api/portraits/men/59.jpg"
                name="Patient Name"
                gender="Female"
                age={40}
                email="patient@example.com"
                contactNumber="+94 72 1089721"
                weight="70 kg"
                height="170 cm"
                bloodType="O+"
                bloodPressure="120/80 mmHg"
                allergies="None"
                hereditaryDiseases="None"
              />

            </div> */}

      {/* Reports */}
      {/* <div className="my-6 flex flex-col gap-3">
              <h1 className="font-medium text-ugray-600">Reports</h1>
              <ReportCard reports={reports} />
            </div> */}
      {/* </div> */}
      {/* </> */}

    </div>
  );
};

export default PatientDetails;


