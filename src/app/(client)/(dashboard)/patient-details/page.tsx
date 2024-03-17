import PatientCard from "@/components/patient-details/PatientCard";
import ReportCard from "@/components/patient-details/ReportCard";
import React from "react";

const Patients = () => {
  const reports = [
    { id: "1", name: "Report 1", date: "2024-03-17" },
    { id: "2", name: "Report 2", date: "2024-03-18" },
    { id: "3", name: "Report 3", date: "2024-03-19" },
  ];

  return (
    <div className="">
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

      <div className="my-6 flex flex-col gap-3">
        <h1 className="font-medium text-ugray-400">Reports</h1>
        <ReportCard reports={reports} />
      </div>
    </div>
  );
};

export default Patients;
