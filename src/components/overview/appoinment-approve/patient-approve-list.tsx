import PatientCard from "./patient-card";
import { AppointmentsApprove } from "@/data/overview/appoinments-approve";

export default function PatientApproveList() {
  return (
    <div className="bg-ugray-0 mt-6 rounded-lg p-4">
      <div className="flex flex-col gap-7">
        {AppointmentsApprove.map((patient) => (
          <PatientCard
            key={patient.id}
            name={patient.name}
            appoinmentNo={patient.appoinmentNo}
            imageUrl={patient.imageUrl}
            status={patient.status}
          />
        ))}
      </div>
    </div>
  );
}
