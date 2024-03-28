"use client"

import PatientCard from "./patient-card";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function PatientApproveList() {
  const dashboardAppointments = useSelector(
    (state: RootState) => state.dashBoardDataState.dashboardAppointments.slice(0, 5)
  )

  return (
    <div className="bg-ugray-0 mt-6 rounded-lg p-4">
      <div className="flex flex-col gap-7">
        {dashboardAppointments.map((patient) => (
          <PatientCard
            key={patient._id}
            name={`${patient.patientFirstName} ${patient.patientLastName}`}
            appoinmentNo={patient.appointmentNumber.toString()}
            imageUrl={patient.patientImgUrl}
            status={patient.status}
            id={patient._id}
          />
        ))}
      </div>
    </div>
  );
}
