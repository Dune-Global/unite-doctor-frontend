import HistoryAccordion from "@/components/patient-details/HistoryAccordion";
import PatientCard from "@/components/patient-details/PatientCard";
import Progress from "@/components/patient-details/PatientProgress";
import ReportCard from "@/components/patient-details/ReportCard";
import React from "react";

const PatientDetails = () => {
  const reports = [
    { id: "1", name: "Report 1", date: "2024-03-17" },
    { id: "2", name: "Report 2", date: "2024-03-18" },
    { id: "3", name: "Report 3", date: "2024-03-19" },
  ];

  return (
    <div className="">
      {/* Patient card */}
      <div>
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
      </div>

      {/* Reports */}
      <div className="my-6 flex flex-col gap-3">
        <h1 className="font-medium text-ugray-600">Reports</h1>
        <ReportCard reports={reports} />
      </div>

      {/* Progress */}
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl text-ugray-600 self-start">
          Patient Details
        </h1>
        <div className="max-w-[960px] w-full px-10 xl:px-2">
          <Progress currentStep={2} />
        </div>
      </div>

      {/* Accordion */}
      <div>
        <HistoryAccordion />
      </div>
    </div>
  );
};

export default PatientDetails;
